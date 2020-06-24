import Dropdown from '../index';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Dropdown render', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var dropdown = new Dropdown();
        var container = dropdown.render();
        expect(container.className).toBe('kuc-dropdown-container');
        expect(container.classList.length).toBe(1);
        expect(container.getAttribute('disabled')).toBe(null);
        expect(container).toBeVisible();
    });
    test('Render successfully with full props', function () {
        var dropdown = new Dropdown({
            items: [
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
            ],
            value: expectedValues[1],
            isDisabled: false,
            isVisible: false
        });
        var container = dropdown.render();
        expect(container.className).toBe('kuc-dropdown-container');
        expect(container.classList.length).toBe(1);
        expect(container.getAttribute('disabled')).toBe(null);
        expect(container).not.toBeVisible();
        // check selected label text
        var selectedTextEl = container.querySelector('.kuc-dropdown-selected-label');
        expect(selectedTextEl.innerText).toBe(expectedLabels[1]);
        // check each dropdown items
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (var i = 0; i < itemsEl.length; i++) {
            var itemEl = itemsEl[i];
            var itemLabelEl = itemEl.children[1];
            expect(itemLabelEl.innerText).toBe(expectedLabels[i]);
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
        var dropdown = new Dropdown({
            items: 0,
            isDisabled: 'abc',
            isVisible: 'abc'
        });
        var container = dropdown.render();
        expect(container.className).toBe('kuc-dropdown-container');
        expect(container.classList.length).toBe(1);
        expect(container.getAttribute('disabled')).toBe(null);
        expect(container).toBeVisible();
    });
    test('Render successfully with showing and hiding selection list', function () {
        var dropdown = new Dropdown({});
        var container = dropdown.render();
        var subcontainer = container.querySelector('.kuc-dropdown-sub-container');
        var outer = container.querySelector('.kuc-dropdown');
        var itemsEl = container.querySelector('.kuc-list-outer');
        fireEvent.click(outer);
        expect(itemsEl).toBeVisible();
        fireEvent.blur(subcontainer);
        expect(itemsEl).not.toBeVisible();
    });
    test('throw error with invalid option.value not in item list', function () {
        expect(function () {
            new Dropdown({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0]
                    }
                ],
                value: expectedValues[1]
            });
        }).toThrowError();
    });
    test('Throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            new Dropdown({
                items: ['orange', 'banana', 'lemon']
            });
        }).toThrowError();
    });
    test('throw error with duplicate option.items[x].value', function () {
        expect(function () {
            new Dropdown({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                    },
                    {
                        label: expectedLabels[1],
                        value: expectedValues[0],
                    }
                ],
            });
        }).toThrowError();
    });
});
