/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully without props', function () {
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        expect(container).toBeTruthy();
        expect(container.className).toContain('kuc-attachment-outer');
    });
    test('Render successfully with props', function () {
        var FILE_NAME = 'file2.png';
        var newFile = new File([''], FILE_NAME, {
            type: 'image/png',
        });
        var FORMATED_FILE_SIZE = '0 bytes';
        var BROWSE_BUTTON_TEXT = 'Browse file';
        var FILE_LIMIT_TEXT = 'Limit';
        var DROPZONE_TEXT = 'Dropzone Text';
        var ERROR_MESSAGE_TEXT = 'Error';
        var myAttachment = new Attachment({
            files: [newFile],
            browseButtonText: BROWSE_BUTTON_TEXT,
            fileLimitText: FILE_LIMIT_TEXT,
            dropZoneText: DROPZONE_TEXT,
            isErrorVisible: true,
            errorMessage: ERROR_MESSAGE_TEXT
        });
        var container = myAttachment.render();
        expect(container).toBeTruthy();
        expect(container.className).toContain('kuc-attachment-outer');
        // Verify browse button DOM
        var browseDOM = container.getElementsByClassName('kuc-attachment-file-upload-button-text');
        expect(browseDOM.length).toEqual(1);
        expect(browseDOM[0]).toBeInstanceOf(HTMLSpanElement);
        expect(browseDOM[0].innerText).toEqual(BROWSE_BUTTON_TEXT);
        // Verify file limit text DOM
        var fileLimitDOM = container.getElementsByClassName('kuc-attachment-file-constraints');
        expect(fileLimitDOM.length).toEqual(1);
        expect(fileLimitDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(fileLimitDOM[0].innerText).toEqual(FILE_LIMIT_TEXT);
        // Verify dropzone text DOM
        var dropzoneDOM = container.getElementsByClassName('kuc-attachment-file-droppable-text');
        expect(dropzoneDOM.length).toEqual(1);
        expect(dropzoneDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(dropzoneDOM[0].innerText).toEqual(DROPZONE_TEXT);
        // Verify error DOM
        var errorDOM = container.getElementsByClassName('kuc-attachment-file-error');
        expect(errorDOM.length).toEqual(1);
        expect(errorDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(errorDOM[0].innerText).toEqual(ERROR_MESSAGE_TEXT);
        // Verify files DOM
        var fileDOMList = container.getElementsByClassName('kuc-attachment-file-item');
        expect(fileDOMList.length).toEqual(1);
        for (var index = 0; index < fileDOMList.length; index++) {
            var fileDOM = fileDOMList[index];
            // Verify file name DOM
            var fileNameDOM = (fileDOM.getElementsByClassName('kuc-attachment_file_name'))[0];
            expect(fileNameDOM.getAttribute('title')).toEqual(FILE_NAME);
            expect(fileNameDOM).toBeInstanceOf(HTMLDivElement);
            expect(fileNameDOM.innerText).toEqual(FILE_NAME);
            // Verify file size DOM
            var fileSizeDOM = (fileDOM.getElementsByClassName('kuc-attachment_file_size'))[0];
            expect(fileSizeDOM).toBeInstanceOf(HTMLDivElement);
            expect(fileSizeDOM.innerText).toEqual(FORMATED_FILE_SIZE);
        }
    });
    test('render error', function () {
        var ERROR = 'Attachment error';
        var myAttachment = new Attachment({
            isErrorVisible: true,
            errorMessage: ERROR
        });
        var container = myAttachment.render();
        expect(container).toBeTruthy();
        expect(container.className).toBe('kuc-attachment-outer');
        var errorElm = container.getElementsByClassName('kuc-attachment-file-error');
        expect(errorElm[0]).toBeTruthy();
    });
});
