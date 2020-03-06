/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    test('onChange event handler should fire successfully', function () {
        var textValue = 'error';
        var onChangeText = function (value) {
            expect(value).toBe(textValue);
        };
        var _a = render(React.createElement(Text, { value: textValue, onChange: onChangeText })), container = _a.container, rerender = _a.rerender;
        expect(container.firstElementChild).toBeTruthy();
        textValue = 'hello';
        fireEvent.change(container.firstElementChild, { target: { value: textValue } });
        rerender(React.createElement(Text, { value: textValue }));
        expect(container.firstElementChild).toHaveValue(textValue);
    });
    test('onClick event handler should fire successfully', function () {
        var textValue = 'error';
        var onClick = function (e) {
            expect(e.target.value).toBe(textValue);
        };
        var _a = render(React.createElement(Text, { value: textValue, onClick: onClick })), container = _a.container, rerender = _a.rerender;
        expect(container.firstElementChild).toBeTruthy();
        textValue = 'hello';
        fireEvent.click(container.firstElementChild, { target: { value: textValue } });
        rerender(React.createElement(Text, { value: textValue }));
        expect(container.firstElementChild).toHaveValue(textValue);
    });
});
