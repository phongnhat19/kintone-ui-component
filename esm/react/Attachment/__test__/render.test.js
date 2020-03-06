/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import Attachment from '../index';
import React from 'react';
describe('Unit test Attachment react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render without props Attachment', function () {
        var container = render(React.createElement(Attachment, null)).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-attachment-outer');
        }
    });
    test('render with isVisible = false', function () {
        var container = render(React.createElement(Attachment, { isVisible: false })).container;
        expect(container.firstElementChild).toBeFalsy();
    });
    test('render with files', function () {
        var container = render(React.createElement(Attachment, { files: [{ name: 'test_1', size: 12345 }] })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-attachment-outer');
    });
    test('render error', function () {
        var ERROR = 'Attachment error';
        var _a = render(React.createElement(Attachment, { isErrorVisible: true, errorMessage: ERROR })), container = _a.container, getByText = _a.getByText;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-attachment-outer');
        var errorElm = getByText(ERROR);
        expect(errorElm).toBeTruthy();
    });
});
