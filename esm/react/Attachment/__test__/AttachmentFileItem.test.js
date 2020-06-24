/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import AttachmentFileItem from '../AttachmentFileItem';
import React from 'react';
describe('Unit test for AttachmentFileItem react', function () {
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
        var handleRemove = function () { };
        var container = render(React.createElement(AttachmentFileItem, { index: 0, fileName: "file1.png", fileSize: 1073741824, onFileRemove: handleRemove })).container;
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        var fileSize = fileSizeDOM[0].innerHTML;
        expect(fileSize).toEqual('1 GB');
    });
    test('Render file with size larger than 1 MB', function () {
        var handleRemove = function () { };
        var container = render(React.createElement(AttachmentFileItem, { index: 0, fileName: "file1.png", fileSize: 1048576, onFileRemove: handleRemove })).container;
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        var fileSize = fileSizeDOM[0].innerHTML;
        expect(fileSize).toEqual('1 MB');
    });
    test('Render NaN bytes when fileSize type is not number', function () {
        var handleRemove = function () { };
        // @ts-ignore
        var container = render(React.createElement(AttachmentFileItem, { index: 0, fileName: "file1.png", fileSize: "123", onFileRemove: handleRemove })).container;
        var fileSizeDOM = container.getElementsByClassName('kuc-attachment_file_size');
        var fileSize = fileSizeDOM[0].innerHTML;
        expect(fileSize).toEqual('NaN bytes');
    });
});
