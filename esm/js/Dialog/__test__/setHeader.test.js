/* eslint-disable @typescript-eslint/no-empty-function */
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
import Dialog from '../index';
describe('Unit test Dialog setHeader', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Function setHeader and getHeader run correctly', function () {
        var myDialog = new Dialog({ header: 'header 1' });
        var NEW_HEADER = 'header 2';
        myDialog.setHeader(NEW_HEADER);
        expect(myDialog.getHeader()).toEqual(NEW_HEADER);
        // Verify header DOM
        var container = myDialog.render();
        var headerDOM = container.getElementsByClassName('kuc-dialog-header');
        expect(headerDOM.length).toEqual(1);
        expect(headerDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(headerDOM[0].innerHTML).toContain(NEW_HEADER);
    });
    test('setHeader throw error with invalid header', function () {
        try {
            var myDialog = new Dialog({ header: 'header' });
            // @ts-ignore
            myDialog.setHeader(1);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Update header works normally without removing close button', function () {
        var headerDOM = document.createElement('h1');
        headerDOM.innerHTML = 'header 1';
        var myDialog = new Dialog({ header: headerDOM, showCloseButton: true });
        var newHeaderDOM = document.createElement('h1');
        newHeaderDOM.innerHTML = 'header 2';
        myDialog.setHeader(newHeaderDOM);
        expect(myDialog.getHeader()).toBe(newHeaderDOM);
    });
});
