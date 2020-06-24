/* eslint-disable @typescript-eslint/no-empty-function */
import AttachmentFileItem from '../AttachmentFileItem';
describe('Unit test for AttachmentFileItem', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render file with size larger than 1 GB', function () {
        var item = new AttachmentFileItem({
            index: 0,
            fileName: 'file1.png',
            fileSize: 1073741824
        });
        var container = item.render();
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
        var fileSize = fileSizeDOM[0].innerText;
        expect(fileSize).toEqual('1 GB');
    });
    test('Render file with size larger than 1 MB', function () {
        var item = new AttachmentFileItem({
            index: 0,
            fileName: 'file1.png',
            fileSize: 1048576
        });
        var container = item.render();
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
        var fileSize = fileSizeDOM[0].innerText;
        expect(fileSize).toEqual('1 MB');
    });
    test('Render NaN bytes when fileSize type is not number', function () {
        var handleRemove = function () { };
        // @ts-ignore
        var item = new AttachmentFileItem({
            index: 0,
            fileName: 'file1.png',
            fileSize: '123',
            onFileRemove: handleRemove
        });
        var container = item.render();
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        expect(fileSizeDOM[0]).toBeInstanceOf(HTMLDivElement);
        var fileSize = fileSizeDOM[0].innerText;
        expect(fileSize).toEqual('NaN bytes');
    });
    test('Render with empty props', function () {
        var item = new AttachmentFileItem();
        expect(item).toBeInstanceOf(AttachmentFileItem);
    });
});
