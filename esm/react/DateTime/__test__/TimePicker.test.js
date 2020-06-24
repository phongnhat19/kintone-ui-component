/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';
import TimePicker from '../components/TimePicker';
describe('Unit test TimePicker react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onKeyUp of TimePicker', function () {
        var timeRef = createRef();
        var container = render(React.createElement(TimePicker, { pickerDisplay: "block", timeRef: timeRef, onTimeClick: function () { } })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('time-picker-container');
        }
        var timepicker = container.getElementsByClassName('kuc-time-list-item')[1];
        fireEvent.keyUp(timepicker);
    });
});
