/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import Label from '../index';
import React from 'react';
describe('Unit test Label react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render without props Label', function () {
        var container = render(React.createElement(Label, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-label');
    });
    test('render with full props Label', function () {
        var container = render(React.createElement(Label, { backgroundColor: "red", isRequired: true, isVisible: true, text: "label", textColor: "blue" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-label');
    });
    test('render with props isVisible=false props Label', function () {
        var container = render(React.createElement(Label, { isVisible: false })).container;
        expect(container.firstElementChild).toBeNull();
    });
});
