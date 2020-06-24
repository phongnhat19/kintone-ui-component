/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment setDropZoneText', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setDropZoneText is called successfully', function () {
        var DROPZONE_TEXT = 'Drop files here.';
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        myAttachment.setDropZoneText(DROPZONE_TEXT);
        var dropzoneDOM = container.getElementsByClassName('kuc-attachment-file-droppable-text');
        expect(dropzoneDOM.length).toEqual(1);
        expect(dropzoneDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(dropzoneDOM[0].innerText).toEqual(DROPZONE_TEXT);
    });
});
