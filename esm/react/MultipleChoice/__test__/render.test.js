/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MultipleChoice from '../index';
describe('Unit test MultipleChoice react', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var container = render(React.createElement(MultipleChoice, null)).container;
        if (container.firstElementChild) {
            var childEl_1 = container.firstElementChild;
            expect(childEl_1.classList.length).toBe(2);
            expect(['kuc-multiple-list'].every(function (c) { return childEl_1.classList.contains(c); })).toBe(true);
            expect(childEl_1.classList.contains('kuc-list-item-disable')).toBe(false);
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
        var container = render(React.createElement(MultipleChoice, { items: expectedItems, value: value, isDisabled: true, isVisible: false })).container;
        if (container.firstElementChild) {
            var childEl_2 = container.firstElementChild;
            expect(childEl_2.classList.length).toBe(1);
            expect(['kuc-multiple-list'].every(function (c) { return childEl_2.classList.contains(c); })).toBe(true);
            expect(childEl_2).not.toBeVisible();
            if (!childEl_2.children || childEl_2.children.length !== 3) {
                expect(false);
            }
            var items = childEl_2.children;
            var ids = [];
            var selectedItem = value;
            // Check each items
            for (var index = 0; index < 3; index++) {
                var item = items[index];
                if (!item.children || item.children.length !== 2) {
                    expect(false);
                }
                var inputEl = item.children[0];
                var labelEl = item.children[1];
                // Check input & label elements
                // expect(inputEl).toBeDisabled();
                expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
                expect(labelEl.textContent).toBe(expectedLabels[index]);
                // Check for item ids
                expect(inputEl.id === labelEl.getAttribute('for')).toBe(true);
                expect(ids.indexOf(inputEl.id) === -1).toBe(true);
                ids.push(inputEl.id);
                // Check selected items
                if (selectedItem.indexOf(expectedValues[index]) > -1) {
                    expect(inputEl.checked).toBe(true);
                }
                else {
                    expect(inputEl.checked).toBe(false);
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
        var container = render(React.createElement(MultipleChoice, { items: expectedItems, isVisible: "abc", isDisabled: "abc" })).container;
        if (container.firstElementChild) {
            var childEl_3 = container.firstElementChild;
            expect(childEl_3.classList.length).toBe(3);
            expect(['kuc-multiple-list'].every(function (c) { return childEl_3.classList.contains(c); })).toBe(true);
            expect(childEl_3.classList.contains('kuc-list-item-disable')).toBe(false);
            expect(childEl_3).toBeVisible();
            var items = childEl_3.children;
            var item = items[0];
            expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
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
            // Check that expectedValues[0] is selected by click container.firstElementChild
            expect(val).toEqual([expectedValues[1]]);
            value = val;
        };
        var container = render(React.createElement(MultipleChoice, { items: expectedItems, value: value, onChange: handleChange })).container;
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
            // Check that expectedValues[0] is selected by click container.firstElementChild
            expect(val.every(function (c) { return [expectedValues[0], expectedValues[1]].includes(c); })).toBe(true);
            value = val;
        };
        var container = render(React.createElement(MultipleChoice, { items: expectedItems, value: value, onChange: handleChange })).container;
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
            // Check handleClick will not work
            expect(false);
        };
        // @ts-ignore
        var container = render(React.createElement(MultipleChoice, { items: expectedItems, value: value, onClick: handleClick })).container;
        if (container.firstElementChild) {
            var childEl = container.firstElementChild;
            fireEvent.click(childEl);
        }
        else {
            expect(false);
        }
    });
    test('Throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            render(React.createElement(MultipleChoice, { items: ['orange', 'banana', 'lemon'] }));
        }).toThrowError();
    });
    test('Throw error with duplicate option.items[x].value', function () {
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
            render(React.createElement(MultipleChoice, { items: expectedItems }));
        }).toThrowError();
    });
    test('Throw error with invalid prop type of option.value', function () {
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
            render(React.createElement(MultipleChoice, { items: expectedItems, value: expectedValues[0] }));
        }).toThrowError();
    });
    test('Throw error with invalid prop value of option.value', function () {
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
            render(React.createElement(MultipleChoice, { items: expectedItems, value: [expectedValues[2]] }));
        }).toThrowError();
    });
    test('Throw error with duplicate option.value', function () {
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
            render(React.createElement(MultipleChoice, { items: expectedItems, value: [expectedValues[0], expectedValues[0]] }));
        }).toThrowError();
    });
});
