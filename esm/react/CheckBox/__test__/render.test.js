/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from '../index';
describe('Unit test Checkbox react', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var container = render(React.createElement(CheckBox, null)).container;
        if (container.firstElementChild) {
            var childEl_1 = container.firstElementChild;
            expect(childEl_1.classList.length).toBe(1);
            expect(['kuc-input-checkbox'].every(function (c) { return childEl_1.classList.contains(c); })).toBe(true);
            expect(childEl_1).toBeVisible();
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props', function () {
        var expectedItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
                isDisabled: true
            },
            {
                label: expectedLabels[2],
                value: expectedValues[2],
                isDisabled: true
            },
        ];
        var value = [expectedValues[0], expectedValues[1]];
        var container = render(React.createElement(CheckBox, { items: expectedItems, value: value, isDisabled: true, isVisible: false })).container;
        if (container.firstElementChild) {
            var childEl_2 = container.firstElementChild;
            expect(childEl_2.classList.length).toBe(1);
            expect(['kuc-input-checkbox'].every(function (c) { return childEl_2.classList.contains(c); })).toBe(true);
            expect(childEl_2).not.toBeVisible();
            if (!childEl_2.children || childEl_2.children.length !== 3) {
                expect(false);
            }
            var items = childEl_2.children;
            var ids = [];
            var selectedItem = value;
            // check each items
            for (var index = 0; index < 3; index++) {
                var item = items[index];
                if (!item.children || item.children.length !== 2) {
                    expect(false);
                }
                var inputEl = item.children[0];
                var labelEl = item.children[1];
                // check input & label elements
                expect(inputEl).toBeDisabled();
                expect(labelEl.textContent).toBe(expectedLabels[index]);
                // check for item ids
                expect(inputEl.id === labelEl.getAttribute('for')).toBe(true);
                expect(ids.indexOf(inputEl.id) === -1).toBe(true);
                ids.push(inputEl.id);
                // check selected items
                if (selectedItem.indexOf(expectedValues[index]) > -1) {
                    expect(inputEl.checked).toBeTruthy();
                }
                else {
                    expect(inputEl.checked).toBeFalsy();
                }
            }
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with wrong props', function () {
        var expectedItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            }
        ];
        // @ts-ignore
        var container = render(React.createElement(CheckBox, { items: expectedItems, isVisible: "abc", isDisabled: "abc" })).container;
        if (container.firstElementChild) {
            var childEl_3 = container.firstElementChild;
            expect(childEl_3.classList.length).toBe(1);
            expect(['kuc-input-checkbox'].every(function (c) { return childEl_3.classList.contains(c); })).toBe(true);
            expect(childEl_3).toBeVisible();
            var items = childEl_3.children;
            var item = items[0];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
            // isDisabledの型チェックが行われていないためisDisabled='abc'とするとtrueになってしまう。
            expect(inputEl).not.toBeDisabled();
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with onChange for selected', function () {
        var expectedItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
            }
        ];
        var value = [expectedValues[0], expectedValues[1]];
        var handleChange = function (val) {
            // check that expectedValues[0] is selected by click container.firstElementChild
            expect(val).toEqual([expectedValues[1]]);
            value = val;
        };
        var container = render(React.createElement(CheckBox, { items: expectedItems, value: value, onChange: handleChange })).container;
        if (container.firstElementChild) {
            var childEl = container.firstElementChild;
            fireEvent.click(childEl.children[0].children[0]);
            expect(value).toEqual([expectedValues[1]]);
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with onChange for not selected', function () {
        var expectedItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
            }
        ];
        var value = [expectedValues[1]];
        var handleChange = function (val) {
            // check that expectedValues[0] is selected by click container.firstElementChild
            expect(val.every(function (c) { return [expectedValues[0], expectedValues[1]].includes(c); })).toBe(true);
            value = val;
        };
        var container = render(React.createElement(CheckBox, { items: expectedItems, value: value, onChange: handleChange })).container;
        if (container.firstElementChild) {
            var childEl = container.firstElementChild;
            fireEvent.click(childEl.children[0].children[0]);
            expect(value.every(function (c) { return [expectedValues[0], expectedValues[1]].includes(c); })).toBe(true);
        }
        else {
            expect(false);
        }
    });
    test('onClick event will not work', function () {
        var expectedItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
            }
        ];
        var value = [expectedValues[1]];
        var handleClick = function (e) {
            // check handleClick will not work
            expect(false);
        };
        // @ts-ignore
        var container = render(React.createElement(CheckBox, { items: expectedItems, value: value, onClick: handleClick })).container;
        if (container.firstElementChild) {
            var childEl = container.firstElementChild;
            fireEvent.click(childEl);
        }
        else {
            expect(false);
        }
    });
    test('throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            render(React.createElement(CheckBox, { items: ['orange', 'banana', 'lemon'] }));
        }).toThrowError();
    });
    test('throw error with duplicate option.items[x].value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[0],
                }
            ];
            render(React.createElement(CheckBox, { items: expectedItems }));
        }).toThrowError();
    });
    test('throw error with invalid prop type of option.value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                }
            ];
            // @ts-ignore
            render(React.createElement(CheckBox, { items: expectedItems, value: expectedValues[0] }));
        }).toThrowError();
    });
    test('throw error with invalid prop value of option.value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                }
            ];
            render(React.createElement(CheckBox, { items: expectedItems, value: [expectedValues[2]] }));
        }).toThrowError();
    });
    test('throw error with duplicate option.value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                }
            ];
            render(React.createElement(CheckBox, { items: expectedItems, value: [expectedValues[0], expectedValues[0]] }));
        }).toThrowError();
    });
});
