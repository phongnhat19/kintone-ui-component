/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment setBrowseButtonText', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setBrowseButtonText is called successfully', function () {
        var BROWSE_BUTTON_TEXT = 'Drop files here.';
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        myAttachment.setBrowseButtonText(BROWSE_BUTTON_TEXT);
        var browseDOM = container.getElementsByClassName('kuc-attachment-file-upload-button-text');
        expect(browseDOM.length).toEqual(1);
        expect(browseDOM[0]).toBeInstanceOf(HTMLSpanElement);
        expect(browseDOM[0].innerText).toEqual(BROWSE_BUTTON_TEXT);
    });
});
