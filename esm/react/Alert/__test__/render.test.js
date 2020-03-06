/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import Alert from '../index';
import React from 'react';
describe('Unit test Alert react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render without props Alert default type error', function () {
        var container = render(React.createElement(Alert, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-alert bg-danger');
    });
    test('render with props Alert type success', function () {
        var container = render(React.createElement(Alert, { type: "success" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-alert bg-success');
    });
    test('render with props Alert isVisible', function () {
        var container = render(React.createElement(Alert, { isVisible: false })).container;
        expect(container.firstElementChild).toBeNull();
    });
});
