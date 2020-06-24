/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import DateTime from '../index';
import React from 'react';
import Message from '../../../constant/Message';
describe('Unit test DateTime react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should render successfully with full props DateTime', function () {
        var onChange = jest.fn(function (value) {
            expect(value.getDate()).toBe(26);
        });
        var getByText = render(React.createElement(DateTime, { value: new Date('16:24 06/01/2020'), type: "datetime", locale: "zh", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", isDisabled: false, isVisible: true, onChange: onChange })).getByText;
        fireEvent.click(getByText('26'));
        expect(onChange).toBeCalledTimes(1);
    });
    test('should show Date picker when the DateTime input is focus', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "date", dateFormat: "dd/MM/YYYY" })).container;
        var datetimeInput = container.getElementsByClassName('kuc-input-text text-input')[0];
        var piker = container.getElementsByClassName('date-picker-container')[0];
        expect(piker).toHaveStyle('display: none;');
        fireEvent.focus(datetimeInput, { target: { value: null } });
        expect(piker).toHaveStyle('display: block;');
        fireEvent.keyDown(datetimeInput, { key: 'Tab', code: 9 });
        expect(piker).toHaveStyle('display: none;');
    });
    test('should show Time picker when the Time input is focus', function () {
        var onChange = function (value) { };
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: onChange })).container;
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        var piker = container.getElementsByClassName('time-picker-container')[0];
        expect(piker).toHaveStyle('display: none;');
        fireEvent.focus(node, { target: { selectionStart: 0 } });
        expect(piker).toHaveStyle('display: flex;');
    });
    test('onKeyDown dateTextInput DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", dateFormat: "dd/MM/YYYY", onChange: function () { } })).container;
        var piker = container.getElementsByClassName('date-picker-container')[0];
        var node = container.getElementsByClassName('kuc-input-text text-input')[0];
        fireEvent.focus(node);
        expect(piker).toHaveStyle('display: block;');
        fireEvent.keyDown(node, { key: 'Tab', code: 9 });
        expect(piker).toHaveStyle('display: none;');
    });
    test('onEvent date-picker-container DateTime', function () {
        var today = new Date();
        today.setHours(0);
        today.setSeconds(0);
        today.setMinutes(0);
        today.setMilliseconds(0);
        var noneDate = new Date('02/02/2020');
        noneDate.setHours(0);
        noneDate.setSeconds(0);
        noneDate.setMinutes(0);
        noneDate.setMilliseconds(0);
        var onChange = jest.fn(function () { });
        var container = render(React.createElement(DateTime, { isVisible: true, isDisabled: false, value: new Date('02/02/2020'), type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: onChange })).container;
        var calendarTodayBtn = container.getElementsByClassName('today calendar-button-control')[0];
        fireEvent.click(calendarTodayBtn);
        expect(onChange).toHaveBeenNthCalledWith(1, today);
        var noneBtn = container.getElementsByClassName('none calendar-button-control')[0];
        fireEvent.keyUp(noneBtn);
        expect(onChange).toHaveBeenNthCalledWith(2, noneDate);
    });
    test('Should change date successfully when clicking into the time picker', function () {
        var onChange = jest.fn(function (date) {
            expect(date.getHours()).toEqual(0);
            expect(date.getMinutes()).toEqual(30);
        });
        var container = render(React.createElement(DateTime, { isVisible: true, isDisabled: false, value: new Date(), type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: onChange })).container;
        var timePicker = container.getElementsByClassName('kuc-time-list-item')[1];
        fireEvent.click(timePicker);
        expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('should selected range successfully inside the Time input when pressing Tab button', function (done) {
        var mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: function () { } })).container;
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        setTimeout(function () {
            expect(mockFn).toBeCalledWith(0, 2);
            done();
        }, 1);
        fireEvent.keyDown(node, { key: 'Tab', code: 9 });
        expect(mockFn).toBeCalledWith(3, 5);
    });
    test('should reset hour:minutes to 00:00 when typing invalid value into Time input', function () {
        var invlaidvalue = 'kintone';
        var onChange = jest.fn(function () { });
        var today = new Date();
        today.setHours(4);
        today.setSeconds(0);
        today.setMinutes(0);
        today.setMilliseconds(0);
        var container = render(React.createElement(DateTime, { value: today, type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: onChange })).container;
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        fireEvent.change(node, { target: { value: invlaidvalue } });
        expect(node).toHaveValue('00:00');
        fireEvent.keyDown(node, { key: 'Tab', code: 9 });
        fireEvent.change(node, { target: { value: 20 } });
        fireEvent.change(node, { target: { value: invlaidvalue } });
        expect(node).toHaveValue('00:00');
    });
    test('should selected range successfully inside the Time input when pressing Arrow Right/Left button', function () {
        var mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: function () { } })).container;
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        fireEvent.keyDown(node, { key: 'ArrowRight' });
        expect(mockFn).toHaveBeenNthCalledWith(1, 3, 5);
        fireEvent.keyDown(node, { key: 'ArrowLeft' });
        expect(mockFn).toHaveBeenNthCalledWith(2, 0, 2);
    });
    test('should change time successfully when pressing Arrow Up/Down button', function () {
        var date = new Date();
        date.setHours(4);
        date.setSeconds(0);
        date.setMinutes(0);
        date.setMilliseconds(0);
        var updateHourUp = new Date();
        updateHourUp.setHours(5);
        updateHourUp.setSeconds(0);
        updateHourUp.setMinutes(0);
        updateHourUp.setMilliseconds(0);
        var updateTimeUp = new Date();
        updateTimeUp.setHours(4);
        updateTimeUp.setSeconds(0);
        updateTimeUp.setMinutes(1);
        updateTimeUp.setMilliseconds(0);
        var onchange = jest.fn(function (value) { });
        var container = render(React.createElement(DateTime, { value: date, type: "datetime", dateFormat: "dd/MM/YYYY", timeFormat: "HH:mm", onChange: onchange })).container;
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        fireEvent.keyDown(node, { key: 'ArrowUp' });
        expect(onchange).toHaveBeenNthCalledWith(1, updateHourUp);
        fireEvent.keyDown(node, { key: 'ArrowDown' });
        expect(onchange).toHaveBeenNthCalledWith(2, date);
        fireEvent.keyDown(node, { key: 'Tab' });
        fireEvent.keyDown(node, { key: 'ArrowUp' });
        expect(onchange).toHaveBeenNthCalledWith(3, updateTimeUp);
        fireEvent.keyDown(node, { key: 'ArrowDown' });
        expect(onchange).toHaveBeenNthCalledWith(4, date);
    });
    test('should be show error when the dateFormat and timeFormat props is invalid', function () {
        var getByText = render(React.createElement(DateTime, { value: new Date(), type: "datetime", dateFormat: "aa/zz", timeFormat: "dd:aa" })).getByText;
        expect(getByText(Message.datetime.INVALID_DATE)).toBeTruthy();
    });
    test('change value DateTime', function () {
        var onChange = jest.fn(function (value) {
            expect(value).toBeInstanceOf(Date);
            expect(value.getUTCMonth()).toEqual(0);
            expect(value.getUTCDate()).toEqual(18);
            expect(value.getUTCFullYear()).toEqual(2020);
        });
        var container = render(React.createElement(DateTime, { value: new Date('Mon, 6 Jan 2020 08:02:00 GMT'), type: "datetime", onChange: onChange })).container;
        var day = container.getElementsByClassName('day')[20];
        fireEvent.click(day);
        expect(onChange).toBeCalledTimes(1);
    });
});
