/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import Calendar from '../components/Calendar';
import React, { createRef } from 'react';
import { zh, en } from '../components/Locale';
describe('Unit test Calendar react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render with full props Calendar', function () {
        var calendarRef = createRef();
        var container = render(React.createElement(Calendar, { date: new Date('12/15/2020'), locale: zh, pickerDisplay: "none", hasSelection: true, calRef: calendarRef })).container;
        var pickerContainer = container.firstElementChild;
        expect(pickerContainer).toBeTruthy();
        expect(pickerContainer.className).toBe('date-picker-container');
        // Check Prev, Next button
        var headerControl = pickerContainer.getElementsByClassName('month-year-container')[0];
        expect(headerControl).toBeTruthy();
        expect(headerControl.children).toHaveLength(3);
        expect(headerControl.firstChild).toHaveClass('prev calendar-button-control');
        expect(headerControl.children[1]).toHaveClass('kuc-calendar-dropdown-row');
        expect(headerControl.lastChild).toHaveClass('next calendar-button-control');
        // Check day
        var dayContainer = pickerContainer.getElementsByClassName('days-container')[0];
        expect(dayContainer).toBeTruthy();
        // days of week
        expect(pickerContainer.getElementsByClassName('wday-header')).toHaveLength(7);
        // days of month
        expect(pickerContainer.getElementsByClassName('day calendar-button')).toHaveLength(35);
    });
    test('should render calendar successfully when clicking into Prev/Next button', function () {
        var calendarRef = createRef();
        var container = render(React.createElement(Calendar, { date: new Date('05/02/2020'), locale: en, pickerDisplay: "none", hasSelection: true, calRef: calendarRef })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('date-picker-container');
        }
        var listDaybtn = container.getElementsByClassName('day calendar-button');
        expect(listDaybtn[0]).toHaveTextContent('26');
        fireEvent.mouseDown(container);
        var node = container.getElementsByClassName('date-picker-container')[0];
        fireEvent.blur(node);
        var prevBtn = container.getElementsByClassName('prev calendar-button-control')[0];
        fireEvent.click(prevBtn);
        expect(listDaybtn[0]).toHaveTextContent('29');
        var nextBtn = container.getElementsByClassName('next calendar-button-control')[0];
        fireEvent.click(nextBtn);
        expect(listDaybtn[0]).toHaveTextContent('26');
    });
    test('should update Date calendar successfully when clicking days button', function () {
        var calendarRef = createRef();
        var mockFn = jest.fn(function (date) {
            expect(date.getDate()).toBe(6);
        });
        var container = render(React.createElement(Calendar, { date: new Date('05/02/2020'), locale: en, pickerDisplay: "none", hasSelection: true, calRef: calendarRef, onDateClick: mockFn })).container;
        var dayItem = container.getElementsByClassName('day')[10];
        fireEvent.keyUp(dayItem);
        expect(mockFn).toBeCalledTimes(1);
    });
    test('should update Date calendar successfully when clicking days button', function () {
        var calendarRef = createRef();
        var mockFn = jest.fn(function (date) {
            var today = new Date();
            expect(date.getDate()).toBe(today.getDate());
        });
        var container = render(React.createElement(Calendar, { date: new Date('05/02/2020'), locale: en, pickerDisplay: "none", hasSelection: true, calRef: calendarRef, onDateClick: mockFn })).container;
        var todayBtn = container.getElementsByClassName('today calendar-button-control')[0];
        fireEvent.keyUp(todayBtn);
        expect(mockFn).toBeCalledTimes(1);
    });
    test('should update Date calendar successfully when clicking Month/Year Dropdown', function () {
        var calendarRef = createRef();
        var container = render(React.createElement(Calendar, { date: new Date('05/02/2020'), locale: en, pickerDisplay: "none", hasSelection: true, calRef: calendarRef, onDateClick: function () { } })).container;
        var listDaybtn = container.getElementsByClassName('day calendar-button');
        expect(listDaybtn[0]).toHaveTextContent('26');
        var yearEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[1].nextElementSibling;
        fireEvent.click(yearEl);
        expect(listDaybtn[0]).toHaveTextContent('25');
        var monthEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[0].nextElementSibling;
        fireEvent.click(monthEl);
        expect(listDaybtn[0]).toHaveTextContent('30');
    });
});
