/* eslint-disable @typescript-eslint/no-empty-function */
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
import Dialog from '../index';
describe('Unit test Dialog setContent', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Function setContent and getContent run correctly', function () {
        var myDialog = new Dialog({ content: 'content 1' });
        var NEW_CONTENT = 'content 2';
        myDialog.setContent(NEW_CONTENT);
        expect(myDialog.getContent()).toEqual(NEW_CONTENT);
        // Verify content DOM
        var container = myDialog.render();
        var contentDOM = container.getElementsByClassName('kuc-dialog-body');
        expect(contentDOM.length).toEqual(1);
        expect(contentDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(contentDOM[0].innerHTML).toEqual(NEW_CONTENT);
    });
    test('setContent throw error with invalid content', function () {
        try {
            var myDialog = new Dialog({ content: 'content' });
            // @ts-ignore
            myDialog.setContent(1);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
