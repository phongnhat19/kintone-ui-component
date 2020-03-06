import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../index';
describe('Unit test Dropdown react', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var container = render(React.createElement(Dropdown, null)).container;
        var childEl = container.firstElementChild;
        expect(childEl.className).toBe('kuc-dropdown-container');
        expect(childEl.classList.length).toBe(1);
        expect(childEl.getAttribute('disabled')).toBe(null);
        expect(childEl).toBeVisible();
    });
    test('Render successfully with full props', function () {
        var items = [
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
        var container = render(React.createElement(Dropdown, { items: items, value: expectedValues[1], isDisabled: false })).container;
        var childEl = container.firstElementChild;
        expect(childEl.className).toBe('kuc-dropdown-container');
        expect(childEl.classList.length).toBe(1);
        expect(childEl.getAttribute('disabled')).toBe(null);
        expect(childEl).toBeVisible();
        var selectedTextEl = childEl.querySelector('.kuc-dropdown-selected-label');
        expect(selectedTextEl.textContent).toBe(expectedLabels[1]);
        var itemsEl = childEl.querySelector('.kuc-list-outer').children;
        if (!childEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (var i = 0; i < itemsEl.length; i++) {
            var itemEl = itemsEl[i];
            var itemLabelEl = itemEl.children[1];
            expect(itemLabelEl.textContent).toBe(expectedLabels[i]);
            if (i === 1) {
                expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(true);
            }
            else {
                expect(itemEl.classList.contains('kuc-list-item-selected')).toBe(false);
            }
            if (i === 0) {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
            }
            else {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
            }
        }
    });
    test('Render successfully with wrong props', function () {
        // @ts-ignore
        var container = render(React.createElement(Dropdown, { isVisible: "abc", isDisabled: "abc" })).container;
        var childEl = container.firstElementChild;
        expect(childEl.className).toBe('kuc-dropdown-container');
        expect(childEl.classList.length).toBe(1);
        expect(childEl.getAttribute('disabled')).toBe(null);
        expect(childEl).toBeVisible();
    });
    test('Render successfully with showing selection list', function () {
        var container = render(React.createElement(Dropdown, null)).container;
        var childEl = container.firstElementChild;
        var dropdownOuterEl = childEl.querySelector('.kuc-dropdown-outer');
        var itemsEl = childEl.querySelector('.kuc-list-outer');
        fireEvent.click(dropdownOuterEl);
        expect(itemsEl.getAttribute('style')).toContain('display: block');
    });
    test('Render successfully with hiding selection list', function () {
        var container = render(React.createElement(Dropdown, null)).container;
        var childEl = container.firstElementChild;
        var dropdownOuterEl = childEl.querySelector('.kuc-dropdown-outer');
        var itemsEl = childEl.querySelector('.kuc-list-outer');
        var body = document.body;
        fireEvent.click(dropdownOuterEl);
        fireEvent.mouseDown(body);
        expect(itemsEl).not.toBeVisible();
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
        var handleChange = function (val) {
            expect(val).toBe(expectedValues[1]);
        };
        var container = render(React.createElement(Dropdown, { items: expectedItems, value: expectedValues[0], onChange: handleChange })).container;
        var childEl = container.firstElementChild;
        var itemEl = childEl.children[0].children[1].children[1];
        fireEvent.click(itemEl);
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
        var counter = 0;
        var handleClick = function (val) {
            counter += 1;
            expect(false);
        };
        // @ts-ignore
        var container = render(React.createElement(Dropdown, { items: expectedItems, value: expectedValues[1], onClick: handleClick })).container;
        var childEl = container.firstElementChild;
        var itemEl = childEl.children[0].children[1].children[1];
        fireEvent.click(itemEl);
        expect(counter).toBe(0);
    });
    test('throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            render(React.createElement(Dropdown, { items: ['orange', 'banana', 'lemon'] }));
        }).toThrowError();
    });
    test('throw error with invalid option.value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                }
            ];
            // @ts-ignore
            render(React.createElement(Dropdown, { items: expectedItems, value: expectedValues[1] }));
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
            // @ts-ignore
            render(React.createElement(Dropdown, { items: expectedItems }));
        }).toThrowError();
    });
    test('throw error with invalid option.items[x].value', function () {
        expect(function () {
            var expectedItems = [
                {
                    label: expectedLabels[0],
                },
                {
                    label: expectedLabels[1],
                }
            ];
            // @ts-ignore
            render(React.createElement(Dropdown, { items: expectedItems }));
        }).toThrowError();
    });
});
