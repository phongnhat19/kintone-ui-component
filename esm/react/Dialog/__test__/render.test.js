/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from '@testing-library/react';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
import Dialog from '../index';
describe('Unit test Dialog react', function () {
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
        var container = render(React.createElement(Dialog, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
        // Verify close button DOM
        var closeButtonDOM = container.getElementsByClassName('kuc-dialog-close-button');
        expect(closeButtonDOM.length).toEqual(1);
        expect(closeButtonDOM[0]).toBeInstanceOf(HTMLSpanElement);
    });
    test('Render hidden Dialog successfully', function () {
        var container = render(React.createElement(Dialog, { isVisible: false })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
    });
    test('Render successfully when showCloseButton is false', function () {
        var container = render(React.createElement(Dialog, { showCloseButton: false })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    });
    test('Throw error with invalid header', function () {
        try {
            // @ts-ignore
            var container = render(React.createElement(Dialog, { header: [1] })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error with invalid content', function () {
        try {
            // @ts-ignore
            var container = render(React.createElement(Dialog, { content: [1] })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error with invalid footer', function () {
        try {
            // @ts-ignore
            var container = render(React.createElement(Dialog, { footer: [1] })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error with invalid showCloseButton', function () {
        try {
            // @ts-ignore
            var container = render(React.createElement(Dialog, { showCloseButton: 1 })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error with invalid isVisible', function () {
        try {
            // @ts-ignore
            var container = render(React.createElement(Dialog, { isVisible: 1 })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
