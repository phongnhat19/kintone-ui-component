/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
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
    test('onClick called successfully Alert', function () {
        var onClick = function (e) {
            expect(e.target.className).toBe('kuc-alert bg-danger');
        };
        var container = render(React.createElement(Alert, { onClick: onClick })).container;
        var node = container.getElementsByClassName('kuc-alert bg-danger')[0];
        fireEvent.click(node, {});
    });
});
