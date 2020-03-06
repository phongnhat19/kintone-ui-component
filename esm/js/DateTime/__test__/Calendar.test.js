/* eslint-disable @typescript-eslint/no-empty-function */
import Calendar from '../components/Calendar';
import Locale from '../../../react/DateTime/components/Locale';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Calendar render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render Calendar', function () {
        var calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date('02/11/2020'), locale: Locale.zh });
        var containerEl = calendar.render();
        expect(containerEl.className).toBe('date-picker-container');
        var prevEl = containerEl.getElementsByClassName('prev calendar-button-control')[0];
        expect(prevEl).toBeTruthy();
        var nextEl = containerEl.getElementsByClassName('next calendar-button-control')[0];
        expect(nextEl).toBeTruthy();
        var todayEl = containerEl.getElementsByClassName('today calendar-button-control')[0];
        expect(todayEl).toBeTruthy();
        var noneEl = containerEl.getElementsByClassName('none calendar-button-control')[0];
        expect(noneEl).toBeTruthy();
    });
    test('onClick Pre Button Calendar', function () {
        var calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh });
        var pickerContainer = calendar.render();
        var oldFirstDay = pickerContainer.getElementsByClassName('day')[0];
        expect(oldFirstDay.textContent).toBe('26');
        var span = pickerContainer.getElementsByClassName('prev calendar-button-control')[0];
        fireEvent.click(span);
        var newFirstDay = pickerContainer.getElementsByClassName('day')[0];
        expect(newFirstDay.textContent).toBe('29');
    });
    test('onClick Next Button Calendar', function () {
        var calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh });
        var pickerContainer = calendar.render();
        var oldFirstDay = pickerContainer.getElementsByClassName('day')[0];
        expect(oldFirstDay.textContent).toBe('26');
        var span = pickerContainer.getElementsByClassName('next calendar-button-control')[0];
        fireEvent.click(span);
        var newFirstDay = pickerContainer.getElementsByClassName('day')[0];
        expect(newFirstDay.textContent).toBe('1');
    });
    test('onClick Today Button Calendar', function () {
        var mockFn = jest.fn(function (date) {
            var expectToday = new Date();
            expect(date).toBeTruthy();
            expect(date.getDate()).toBe(expectToday.getDate());
            expect(date.getMonth()).toBe(expectToday.getMonth());
            expect(date.getFullYear()).toBe(expectToday.getFullYear());
        });
        var calendar = new Calendar({
            isVisible: true,
            isDisabled: false,
            date: new Date('02/05/2020'),
            locale: Locale.zh,
            onDateClick: mockFn
        });
        var container = calendar.render();
        var span = container.getElementsByClassName('today calendar-button-control')[0];
        fireEvent.click(span);
        expect(mockFn).toBeCalledTimes(1);
    });
    test('onClick None Button Calendar', function () {
        var mockFn = jest.fn(function (value) {
            expect(value).toBeFalsy();
        });
        var calendar = new Calendar({ isVisible: true,
            isDisabled: false,
            date: new Date(),
            locale: Locale.zh,
            onDateClick: mockFn
        });
        calendar.render();
        var span = calendar.render().getElementsByClassName('none calendar-button-control')[0];
        fireEvent.click(span);
        expect(mockFn).toBeCalledTimes(1);
    });
    test('onBlur Calendar', function () {
        var mockFn = jest.fn(function (e) {
            expect(e).toBeTruthy();
        });
        var calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh, onClickOutside: mockFn });
        calendar.render();
        fireEvent.blur(calendar.render());
        expect(mockFn).toBeCalledTimes(1);
    });
    test('should render successfully when clicking Month/Year Dropdown ', function () {
        var calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date('02/12/2020'), locale: Locale.zh });
        var container = calendar.render();
        var firstDayLabel = container.getElementsByClassName('day')[0];
        expect(firstDayLabel.textContent).toEqual('26');
        var yearEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[0].nextElementSibling;
        fireEvent.click(yearEl);
        firstDayLabel = container.getElementsByClassName('day')[0];
        expect(firstDayLabel.textContent).toEqual('31');
        var monthEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[1].nextElementSibling;
        fireEvent.click(monthEl);
        firstDayLabel = container.getElementsByClassName('day')[0];
        expect(firstDayLabel.textContent).toEqual('28');
    });
});
