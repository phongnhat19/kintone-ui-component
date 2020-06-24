import MultipleChoice from '../index';
describe('Unit test MultipleChoice render', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var multipleChoice = new MultipleChoice();
        var container = multipleChoice.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-multiple-list'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeVisible();
    });
    test('Render successfully with full props', function () {
        // Set the different values from the default values.
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: true
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
            ],
            value: [expectedValues[0], expectedValues[1]],
            isDisabled: true,
            isVisible: false
        });
        var container = multipleChoice.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-multiple-list'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).not.toBeVisible();
        if (!container.children || container.children.length !== 3) {
            expect(false);
        }
        var items = container.children;
        var selectedItem = multipleChoice.getValue() || [];
        // Check each items
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var labelEl = item.children[1];
            // Check input & label elements
            expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
            expect(labelEl.textContent).toBe(expectedLabels[index]);
            // Check selected items
            if (selectedItem.indexOf(expectedValues[index]) > -1) {
                expect(item.classList.contains('kuc-list-item-selected')).toBe(true);
            }
            else {
                expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
            }
        }
    });
    test('Render successfully with right disabled property value', function () {
        var disabledFlg = [false, true];
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: disabledFlg[0]
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                    isDisabled: disabledFlg[1]
                }
            ],
            isDisabled: false,
            isVisible: true
        });
        var container = multipleChoice.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-multiple-list'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeVisible();
        if (!container.children || container.children.length !== 2) {
            expect(false);
        }
        var items = container.children;
        // Check each items
        for (var index = 0; index < 2; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var labelEl = item.children[1];
            // Check input & label elements
            expect(item.classList.contains('kuc-list-item-disable')).toBe(disabledFlg[index]);
            expect(labelEl.textContent).toBe(expectedLabels[index]);
            // Check selected items
            expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
        }
    });
    test('Render successfully with wrong props', function () {
        // Confirm to be set the default values if an invalid value was set.
        // @ts-ignore
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: false
                }
            ],
            isDisabled: 'abc',
            isVisible: 'abc'
        });
        var container = multipleChoice.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-multiple-list'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container.classList.contains('kuc-list-item-disable')).toBe(false);
        expect(container).toBeVisible();
        if (!container.children || container.children.length !== 2) {
            expect(false);
        }
        var items = container.children;
        var item = items[0];
        var labelEl = item.children[1];
        if (!item.children || item.children.length !== 2) {
            expect(false);
        }
        expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
        expect(labelEl.textContent).toBe(expectedLabels[0]);
    });
    test('Throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            new MultipleChoice({
                items: ['orange', 'banana', 'lemon']
            });
        }).toThrowError();
    });
    test('Throw error with duplicate option.items[x].value', function () {
        expect(function () {
            new MultipleChoice({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    },
                    {
                        label: expectedLabels[1],
                        value: expectedValues[0],
                        isDisabled: true
                    }
                ],
                value: []
            });
        }).toThrowError();
    });
    test('Throw error with invalid prop type of option.value', function () {
        expect(function () {
            // @ts-ignore
            new MultipleChoice({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ],
                // In case of not specify by array type.
                value: expectedValues[0]
            });
        }).toThrowError();
    });
    test('Throw error with invalid option.value not in item list', function () {
        expect(function () {
            new MultipleChoice({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ],
                // In case of specify value not in item list.
                value: [expectedValues[1]]
            });
        }).toThrowError();
    });
    test('Throw error with duplicate option.value', function () {
        expect(function () {
            new MultipleChoice({
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
                    }
                ],
                // In case of overlap choice.
                value: [expectedValues[0], expectedValues[0]],
            });
        }).toThrowError();
    });
});
