/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment setFileLimitText', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setFileLimitText is called successfully', function () {
        var FILE_LIMIT_TEXT = 'File limit.';
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        myAttachment.setFileLimitText(FILE_LIMIT_TEXT);
        var fileLimitDOM = container.getElementsByClassName('kuc-attachment-file-constraints');
        expect(fileLimitDOM.length).toEqual(1);
        expect(fileLimitDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(fileLimitDOM[0].innerText).toEqual(FILE_LIMIT_TEXT);
    });
});
