/* eslint-disable @typescript-eslint/no-empty-function */
import Spinner from '../index';
import { render } from '@testing-library/react';
import React from 'react';
describe('Unit test Spinner render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render successfully without props Spinner component', function () {
        var container = render(React.createElement(Spinner, null)).container;
        expect(container.firstElementChild).toBeNull();
    });
    test('render successfully with props Spinner component', function () {
        var container = render(React.createElement(Spinner, { isVisible: true })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-spinner-outer');
    });
});
