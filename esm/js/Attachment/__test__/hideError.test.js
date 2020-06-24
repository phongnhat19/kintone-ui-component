/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment hideError', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('hideError is called successfully', function () {
        var ERROR_MESSAGE_TEXT = 'Error.';
        var myAttachment = new Attachment({ isErrorVisible: true, errorMessage: ERROR_MESSAGE_TEXT });
        var container = myAttachment.render();
        myAttachment.hideError();
        var errorDOM = container.getElementsByClassName('kuc-attachment-file-error');
        expect(errorDOM.length).toEqual(1);
        expect(errorDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(errorDOM[0]).toHaveStyle('display: none');
    });
});
