import Dropdown from '../index';
describe('Unit test Dropdown setItems and getItems', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function getItems and setItems run successfully without optional props', function () {
        var dropdown = new Dropdown();
        var container = dropdown.render();
        var newItem = [
            {
                value: expectedValues[0],
            },
            {
                value: expectedValues[1],
            },
            {
                value: expectedValues[2],
            },
        ];
        dropdown.setItems(newItem);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 2) {
            expect(false);
        }
        expect(dropdown.getItems()).toBe(newItem);
    });
    test('Function getItems and setItems run successfully with full props', function () {
        var dropdown = new Dropdown();
        var container = dropdown.render();
        var newItem = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
                isDisabled: false
            },
            {
                label: expectedLabels[2],
                value: expectedValues[2],
                isDisabled: true
            },
        ];
        dropdown.setItems(newItem);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (var i = 0; i < itemsEl.length; i++) {
            var itemEl = itemsEl[i];
            var itemLabelEl = itemEl.children[1];
            expect(itemLabelEl.innerText).toBe(expectedLabels[i]);
            if (i <= 1) {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
            }
            else {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
            }
        }
        expect(dropdown.getItems()).toBe(newItem);
    });
    test('Function getItems and setItems replace items successfully', function () {
        var dropdown = new Dropdown({
            items: [
                {
                    label: expectedLabels[2],
                    value: expectedValues[2],
                    isDisabled: true
                }
            ]
        });
        var container = dropdown.render();
        var newItem = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
                isDisabled: false
            }
        ];
        dropdown.setItems(newItem);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 2) {
            expect(false);
        }
        for (var i = 0; i < itemsEl.length; i++) {
            var itemEl = itemsEl[i];
            var itemLabelEl = itemEl.children[1];
            expect(itemLabelEl.innerText).toBe(expectedLabels[i]);
            expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
        }
        expect(dropdown.getItems()).toBe(newItem);
    });
    test('throw error without item', function () {
        expect(function () {
            var dropdown = new Dropdown();
            // @ts-ignore
            dropdown.setItems(null);
        }).toThrowError();
    });
    test('throw error with duplicate items', function () {
        expect(function () {
            var dropdown = new Dropdown();
            var newItem = [
                {
                    value: expectedValues[1],
                },
                {
                    value: expectedValues[1],
                },
            ];
            // @ts-ignore
            dropdown.setItems(newItem);
        }).toThrowError();
    });
    test('throw error without item.value', function () {
        expect(function () {
            var dropdown = new Dropdown();
            var newItem = [
                {
                    label: expectedLabels[1],
                    isDisabled: true
                },
            ];
            // @ts-ignore
            dropdown.setItems(newItem);
        }).toThrowError();
    });
});
