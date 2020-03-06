/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import TextArea from '../index';
import React from 'react';
describe('Unit test TextArea react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully with props value', function () {
        var container = render(React.createElement(TextArea, { value: "success" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
    });
    test('Render successfully without props', function () {
        var container = render(React.createElement(TextArea, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
    });
    test('Render successfully without props', function () {
        var container = render(React.createElement(TextArea, { value: "success", isDisabled: false })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-textarea-outer');
    });
    test('Render with props invisible TextArea', function () {
        var container = render(React.createElement(TextArea, { value: "textarea", isVisible: false })).container;
        expect(container).toBeEmpty();
    });
});
