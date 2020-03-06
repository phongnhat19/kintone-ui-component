/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import { fireEvent } from '@testing-library/dom';
import Message from '../../../constant/Message';
describe('Unit test DateTime onEvent', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onEvent successfully dateTextInput of DateTime with date type', function () {
        var datetime = new DateTime({ value: null, type: 'date' });
        var container = datetime.render();
        var dateTextInput = container.getElementsByTagName('input')[0];
        fireEvent.click(dateTextInput, { target: { value: null } });
        fireEvent.focus(dateTextInput, { target: { value: null } });
        expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: block;');
        fireEvent.blur(dateTextInput, { target: { value: null } });
        expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: none;');
    });
    test('onEvent successfully dateTextInput of DateTime with datetime type', function () {
        var datetime = new DateTime({ value: new Date(), type: 'datetime' });
        var container = datetime.render();
        var dateTextInput = container.getElementsByTagName('input')[0];
        fireEvent.click(dateTextInput, { target: { value: null } });
        fireEvent.focus(dateTextInput, { target: { value: null } });
        expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: block;');
        fireEvent.keyDown(dateTextInput, { key: 'Tab' });
        expect(container.getElementsByClassName('date-picker-container')[0]).toHaveStyle('display: none;');
    });
    test('_onCalendarDateClick successfully DateTime', function () {
        var datetime = new DateTime({ value: new Date('02/02/2020') });
        var container = datetime.render();
        // @ts-ignore
        datetime._onCalendarDateClick(new Date('02/03/2020'));
        expect(container.getElementsByTagName('input')[0]).toHaveValue('02/03/2020');
    });
    test('_onTimeClick successfully DateTime', function () {
        var datetime = new DateTime({ value: new Date() });
        var container = datetime.render();
        var date = new Date();
        date.setHours(1);
        date.setMinutes(30);
        // @ts-ignore
        datetime._onTimeClick(date);
        expect(container.getElementsByTagName('input')[1]).toHaveValue('01:30');
    });
    test('error DOM should be displayed with dateFormat undefined', function () {
        var datetime = new DateTime({ dateFormat: 'xx/yy' });
        var container = datetime.render();
        // @ts-ignore
        datetime._checkDateInputError();
        expect(container.getElementsByClassName('label-error')[0]).toHaveStyle('display: block;');
        expect(container.getElementsByClassName('label-error')[0].textContent).toBe(Message.datetime.INVALID_DATE);
    });
    test('_changeHoursBy & _changeMinutesBy to work normally.', function () {
        var date = new Date();
        date.setHours(1);
        date.setMinutes(30);
        var datetime = new DateTime({ value: date });
        var container = datetime.render();
        // @ts-ignore
        datetime._changeHoursBy(1);
        // @ts-ignore
        datetime._changeMinutesBy(30);
        expect(container.getElementsByTagName('input')[1]).toHaveValue('03:00');
    });
    test('should selected range successfully inside the Time input when pressing Tab button', function (done) {
        var mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');
        var datetime = new DateTime({ type: 'time', value: new Date('Mon, 6 Jan 2020 18:40:00 GMT+7') });
        var container = datetime.render();
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        setTimeout(function () {
            expect(mockFn).toBeCalledWith(0, 2);
            done();
        }, 1);
        fireEvent.keyDown(node, { key: 'Tab', code: 9 });
        expect(mockFn).toBeCalledWith(3, 5);
    });
    test('should display invalid hour:minutes when typing invalid value into Time input', function () {
        var invalidValue = 'kintone';
        var onChange = jest.fn(function () { });
        var today = new Date();
        today.setHours(4);
        today.setSeconds(0);
        today.setMinutes(0);
        today.setMilliseconds(0);
        var datetime = new DateTime({
            type: 'time',
            value: today,
            onChange: onChange
        });
        var container = datetime.render();
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        fireEvent.change(node, { target: { value: invalidValue } });
        expect(node).toHaveValue(invalidValue);
        fireEvent.keyDown(node, { key: 'Tab', code: 9 });
        fireEvent.change(node, { target: { value: invalidValue } });
        expect(node).toHaveValue(invalidValue);
    });
    test('should selected range successfully inside the Time input when pressing Arrow Right/Left button', function () {
        var mockFn = spyOn(HTMLInputElement.prototype, 'setSelectionRange');
        var datetime = new DateTime({ type: 'time', value: new Date('Mon, 6 Jan 2020 18:40:00 GMT+7') });
        var container = datetime.render();
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
        var datetime = new DateTime({
            type: 'time',
            value: date
        });
        var container = datetime.render();
        var node = container.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.focus(node);
        fireEvent.keyDown(node, { key: 'ArrowUp' });
        expect(node).toHaveValue('05:00');
        fireEvent.keyDown(node, { key: 'ArrowDown' });
        expect(node).toHaveValue('04:00');
        fireEvent.keyDown(node, { key: 'Tab' });
        fireEvent.keyDown(node, { key: 'ArrowUp' });
        expect(node).toHaveValue('04:01');
        fireEvent.keyDown(node, { key: 'ArrowDown' });
        expect(node).toHaveValue('04:00');
    });
    test('should change time successfully when pressing a day button', function () {
        var datetime = new DateTime({ type: 'time', value: new Date('02/05/2020') });
        var datetimeRender = datetime.render();
        var timePicker = datetimeRender.getElementsByClassName('kuc-time-list-item');
        var timeBtn = datetimeRender.getElementsByClassName('kuc-input-text text-input time')[0];
        fireEvent.click(timeBtn);
        fireEvent.click(timePicker[0]);
        expect(timeBtn).toHaveValue('00:00');
    });
});
