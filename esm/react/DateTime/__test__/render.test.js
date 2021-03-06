/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import DateTime from '../index';
import React from 'react';
// TODO: Remove unreachable else path line 77,78 (unnecessary if) Locale.ts
// TODO: Remove unreachable else path line 51-53 (unnecessary case) Locale.ts
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
    test('render without props DateTime', function () {
        var container = render(React.createElement(DateTime, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
    });
    test('render with full props DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", locale: "zh", dateFormat: "YYYY/MM", timeFormat: "HH:mm:ss", isDisabled: true, isVisible: true })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
    });
    test('render with format EE/d/M/Y H:m full props DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", locale: "zh", dateFormat: "EE/d/M/Y", timeFormat: "H:m", isDisabled: true, isVisible: true })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
    });
    test('render with format EEEE/d/M/Y full props DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", locale: "zh", dateFormat: "EEEE/d/M/Y" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
    });
    test('render with format calendartitle full props DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), type: "datetime", locale: "zh", dateFormat: "calendartitle" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
    });
    test('render with props isVisible=false DateTime', function () {
        var container = render(React.createElement(DateTime, { value: new Date(), isVisible: false, locale: "en" })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('');
        }
    });
    test('render with wrong props DateTime', function () {
        // @ts-ignore
        var container = render(React.createElement(DateTime, { value: new Date(), isDisabled: "false", type: "kintone" })).container;
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toBe('date-time-container');
        expect(container.getElementsByClassName('date-container')).toBeTruthy();
        expect(container.getElementsByClassName('date-container').length).toEqual(1);
        expect(container.getElementsByClassName('time-container')).toBeTruthy();
        expect(container.getElementsByClassName('time-container').length).toEqual(1);
    });
});
