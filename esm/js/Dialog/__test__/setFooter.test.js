/* eslint-disable @typescript-eslint/no-empty-function */
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
import Dialog from '../index';
describe('Unit test Dialog setFooter', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Function setFooter and getFooter run correctly', function () {
        var myDialog = new Dialog({ footer: 'footer 1' });
        var NEW_FOOTER = 'footer 2';
        myDialog.setFooter(NEW_FOOTER);
        expect(myDialog.getFooter()).toEqual(NEW_FOOTER);
        // Verify footer DOM
        var container = myDialog.render();
        var footerDOM = container.getElementsByClassName('kuc-dialog-footer');
        expect(footerDOM.length).toEqual(1);
        expect(footerDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(footerDOM[0].innerHTML).toEqual(NEW_FOOTER);
    });
    test('setFooter throw error with invalid footer', function () {
        try {
            var myDialog = new Dialog({ footer: 'footer' });
            // @ts-ignore
            myDialog.setFooter(1);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
