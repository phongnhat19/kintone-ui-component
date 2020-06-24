/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Attachment react removeFile', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('removeFile is called successfully', function () {
        var file = new File([''], 'file1.png', {
            type: 'image/png',
        });
        var handleFileRemove = jest.fn(function (files) {
            expect(files).toBeInstanceOf(Array);
            expect(files.length).toEqual(0);
        });
        var myAttachment = new Attachment({
            files: [file],
            onFileRemove: handleFileRemove
        });
        var container = myAttachment.render();
        var removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
        try {
            fireEvent.click(removeButton[0]);
            expect(handleFileRemove.mock.calls.length).toBe(1);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('removeFile is called when there\'s no onFileRemove', function () {
        var file = new File([''], 'file1.png', {
            type: 'image/png',
        });
        var myAttachment = new Attachment({
            files: [file]
        });
        var container = myAttachment.render();
        var removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
        try {
            fireEvent.click(removeButton[0]);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
