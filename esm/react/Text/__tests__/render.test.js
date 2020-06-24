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
    test('should be render successfully', function () {
        var container = render(React.createElement(Text, { value: "success", isVisible: true })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-input-text');
    });
    test('should be render empty <div/> successfully', function () {
        var container = render(React.createElement(Text, { value: "success", isVisible: false })).container;
        expect(container).toBeEmpty();
    });
});
