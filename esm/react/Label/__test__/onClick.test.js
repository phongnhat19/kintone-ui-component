/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
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
    test('onClick without props Label', function () {
        var onClick = function (e) {
            expect(true);
        };
        var _a = render(React.createElement(Label, { text: "label", onClick: onClick })), container = _a.container, getByRole = _a.getByRole;
        var node = getByRole('presentation');
        fireEvent.click(node, {});
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('kuc-label');
    });
});
