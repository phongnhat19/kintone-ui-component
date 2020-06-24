/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from '@testing-library/react';
import Text from '../index';
describe('<Text/>', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should be enabled and attribute disabled has not existed', function () {
        var container = render(React.createElement(Text, { value: "error" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.getAttribute('disabled')).toBeNull();
    });
    test('should be disabled', function () {
        var container = render(React.createElement(Text, { value: "error", isDisabled: true })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.getAttribute('disabled')).toBe('');
    });
});
