/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment setErrorMessage', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setErrorMessage is called successfully', function () {
        var ERROR_MESSAGE_TEXT = 'Error.';
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        myAttachment.setErrorMessage(ERROR_MESSAGE_TEXT);
        var errorDOM = container.getElementsByClassName('kuc-attachment-file-error');
        expect(errorDOM.length).toEqual(1);
        expect(errorDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(errorDOM[0].innerText).toEqual(ERROR_MESSAGE_TEXT);
    });
});
