/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import Attachment from '../index';
import React from 'react';
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
        var handleFileRemove = function (files) {
            expect(files).toBeInstanceOf(Array);
            expect(files.length).toEqual(0);
        };
        var container = render(React.createElement(Attachment, { files: [file], onFileRemove: handleFileRemove })).container;
        var removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
        try {
            fireEvent.click(removeButton[0]);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('removeFile is called when there\'s no onFileRemove', function () {
        var file = new File([''], 'file1.png', {
            type: 'image/png',
        });
        var container = render(React.createElement(Attachment, { files: [file] })).container;
        var removeButton = container.getElementsByClassName('kuc-attachment_file_action')[0].getElementsByTagName('button');
        try {
            fireEvent.click(removeButton[0]);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
