/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments',
    MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
    INVALID_ACTION: 'Behavior invalid'
};
describe('Unit test for Tabs react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully without props', function () {
        var container = render(React.createElement(Tabs, null)).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props', function () {
        var items = [{
                tabName: 'Tab 1',
            }, {
                tabName: 'Tab 2',
            }, {
                tabName: 'Tab 3',
            }];
        var container = render(React.createElement(Tabs, { items: items, value: 1 })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully without value', function () {
        var items = [{
                tabName: 'Tab 1',
            }, {
                tabName: 'Tab 2',
            }];
        var container = render(React.createElement(Tabs, { items: items })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with disabled tab', function () {
        var items = [{
                tabName: 'Tab 1',
            }, {
                tabName: 'Tab 2',
                isDisabled: true
            }, {
                tabName: 'Tab 3',
            }];
        var container = render(React.createElement(Tabs, { items: items, value: 2 })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-tabs-tabs');
        }
        else {
            expect(false);
        }
    });
    test('Throw error when value is not number', function () {
        try {
            var items = [{
                    tabName: 'Tab 1',
                }];
            var container = render(React.createElement(Tabs, { items: items, 
                // @ts-ignore
                value: "a" })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error when value is negative', function () {
        try {
            var items = [{
                    tabName: 'Tab 1',
                }];
            var container = render(React.createElement(Tabs, { items: items, value: -1 })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
    test('Throw error when missing tab name', function () {
        try {
            var items = [{
                    tabName1: 'Tab 1',
                }];
            var container = render(React.createElement(Tabs
            // @ts-ignore
            , { 
                // @ts-ignore
                items: items })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.MISSING_TAB_NAME.replace('{{index}}', '0'));
        }
    });
    test('Throw error when disable selected tab and vice versa', function () {
        try {
            var items = [{
                    tabName: 'Tab 1'
                }, {
                    tabName: 'Tab 2',
                    isDisabled: true
                }];
            var container = render(React.createElement(Tabs
            // @ts-ignore
            , { 
                // @ts-ignore
                items: items, value: 1 })).container;
            expect(container).toBeUndefined();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ACTION);
        }
    });
    test('onClickTabItem called successfully', function () {
        var handler = function (tabIndex) {
            expect(tabIndex).toEqual(0);
        };
        var items = [{
                tabName: 'Tab 1',
            }, {
                tabName: 'Tab 2',
            }];
        var _a = render(React.createElement(Tabs, { items: items, onClickTabItem: handler, value: 1 })), container = _a.container, getByText = _a.getByText;
        if (container.firstElementChild) {
            fireEvent.click(getByText('Tab 1'));
        }
        else {
            expect(false);
        }
    });
    test('onKeyUp called successfully', function () {
        var handler = jest.fn(function (tabIndex) {
            expect(tabIndex).toEqual(0);
        });
        var items = [{
                tabName: 'Tab 1',
            }, {
                tabName: 'Tab 2',
            }];
        var _a = render(React.createElement(Tabs, { items: items, onClickTabItem: handler, value: 1 })), container = _a.container, getByText = _a.getByText;
        expect(container.firstElementChild).toBeTruthy();
        fireEvent.click(getByText('Tab 1'));
        expect(handler).toBeCalled();
    });
});
