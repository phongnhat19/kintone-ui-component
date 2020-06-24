import CheckBox from '../index';
describe('Unit test CheckBox render', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Render successfully without props', function () {
        var checkBox = new CheckBox();
        var container = checkBox.render();
        expect(container.classList.length).toBe(1);
        expect(['kuc-input-checkbox'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeVisible();
    });
    test('Render successfully with full props', function () {
        // デフォルト値と異なる値をセットする。
        var checkBox = new CheckBox({
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
            value: [expectedValues[0], expectedValues[1]],
            isDisabled: true,
            isVisible: false
        });
        var container = checkBox.render();
        expect(container.classList.length).toBe(1);
        expect(['kuc-input-checkbox'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).not.toBeVisible();
        if (!container.children || container.children.length !== 3) {
            expect(false);
        }
        var items = container.children;
        var ids = [];
        var selectedItem = checkBox.getValue() || [];
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
            expect(inputEl.id === labelEl.getAttribute('for')).toBeTruthy();
            expect(ids.indexOf(inputEl.id) === -1).toBeTruthy();
            ids.push(inputEl.id);
            // check selected items
            if (selectedItem.indexOf(expectedValues[index]) > -1) {
                expect(inputEl.checked).toBeTruthy();
            }
            else {
                expect(inputEl.checked).toBeFalsy();
            }
        }
    });
    test('Render successfully without select value', function () {
        var disabledFlg = [false, true];
        var checkBox = new CheckBox({
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
        var container = checkBox.render();
        expect(container.classList.length).toBe(1);
        expect(['kuc-input-checkbox'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeVisible();
        if (!container.children || container.children.length !== 2) {
            expect(false);
        }
        var items = container.children;
        // check each items
        for (var index = 0; index < 2; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
            var labelEl = item.children[1];
            // check input & label elements
            expect(inputEl.disabled).toBe(disabledFlg[index]);
            expect(labelEl.textContent).toBe(expectedLabels[index]);
            // check selected items
            expect(inputEl.checked).toBeFalsy();
        }
    });
    test('Render successfully with wrong props', function () {
        // 不正な値を設定した場合はデフォルト値がセットされることを確認する
        // @ts-ignore
        var checkBox = new CheckBox({
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
        var container = checkBox.render();
        expect(container.classList.length).toBe(1);
        expect(['kuc-input-checkbox'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeVisible();
        if (!container.children || container.children.length !== 2) {
            expect(false);
        }
        var items = container.children;
        var item = items[0];
        if (!item.children || item.children.length !== 2) {
            expect(false);
        }
        var inputEl = item.children[0];
        expect(inputEl).not.toBeDisabled();
    });
    test('throw error with invalid option.items', function () {
        expect(function () {
            // @ts-ignore
            new CheckBox({
                items: ['orange', 'banana', 'lemon']
            });
        }).toThrowError();
    });
    test('throw error with duplicate option.items[x].value', function () {
        expect(function () {
            new CheckBox({
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
                value: [],
            });
        }).toThrowError();
    });
    test('throw error with invalid prop type of option.value', function () {
        expect(function () {
            // @ts-ignore
            new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ],
                value: expectedValues[0]
            });
        }).toThrowError();
    });
    test('throw error with invalid option.value', function () {
        expect(function () {
            // @ts-ignore
            new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ],
                value: [expectedValues[1]]
            });
        }).toThrowError();
    });
    test('throw error with duplicate option.value', function () {
        expect(function () {
            new CheckBox({
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
                value: [expectedValues[0], expectedValues[0]],
            });
        }).toThrowError();
    });
});
