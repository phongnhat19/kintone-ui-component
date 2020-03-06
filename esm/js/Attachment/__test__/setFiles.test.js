/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment setFiles', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setFiles is called successfully', function () {
        var myAttachment = new Attachment();
        var FILE_NAME = 'test_1';
        var FILE_SIZE = 1024;
        var FORMATED_FILE_SIZE = '1 KB';
        myAttachment.setFiles([{ name: FILE_NAME, size: FILE_SIZE }]);
        // Verify files prop
        var files = myAttachment.getFiles();
        expect(files).toBeInstanceOf(Array);
        expect(files.length).toEqual(1);
        expect(files[0]).toHaveProperty('name');
        expect(files[0]).toHaveProperty('size');
        expect(files[0].name).toEqual(FILE_NAME);
        expect(files[0].size).toEqual(FILE_SIZE);
        // Verify DOM
        var container = myAttachment.render();
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
});
