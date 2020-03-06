import CheckBox from '../index';
describe('Unit test CheckBox setItems and getItems', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    var expectedIsDisabled = [false, true, true];
    test('Function setItems & getItems run successfully with full props', function () {
        var checkBox = new CheckBox();
        var container = checkBox.render();
        var newItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: expectedIsDisabled[0]
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
                isDisabled: expectedIsDisabled[1]
            }
        ];
        checkBox.setItems(newItems);
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
            if (expectedIsDisabled[index]) {
                expect(inputEl).toBeDisabled();
            }
            else {
                expect(inputEl).not.toBeDisabled();
            }
            expect(labelEl.textContent).toBe(expectedLabels[index]);
        }
        // check getItems
        expect(checkBox.getItems()).toEqual(newItems);
    });
    test('Function setItems replace items successfully', function () {
        var checkBox = new CheckBox({
            items: [
                {
                    label: expectedLabels[2],
                    value: expectedValues[2]
                }
            ]
        });
        var container = checkBox.render();
        var newItems = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: expectedIsDisabled[0]
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
                isDisabled: expectedIsDisabled[1]
            }
        ];
        checkBox.setItems(newItems);
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
            if (expectedIsDisabled[index]) {
                expect(inputEl).toBeDisabled();
            }
            else {
                expect(inputEl).not.toBeDisabled();
            }
            expect(labelEl.textContent).toBe(expectedLabels[index]);
        }
    });
    test('Function setItem run successfully without optional props', function () {
        var checkBox = new CheckBox();
        var container = checkBox.render();
        var newItems = [
            {
                value: expectedValues[0]
            }
        ];
        checkBox.setItems(newItems);
        var items = container.children;
        var item = items[0];
        if (!item.children || item.children.length !== 1) {
            expect(false);
        }
        var inputEl = item.children[0];
        // check input & label elements
        expect(inputEl).not.toBeDisabled();
        // check getItems
        expect(checkBox.getItems()).toEqual(newItems);
    });
    test('throw error without items', function () {
        expect(function () {
            var checkBox = new CheckBox();
            // @ts-ignore
            checkBox.setItems(null);
        }).toThrowError();
    });
    test('throw error without item.value', function () {
        expect(function () {
            var checkBox = new CheckBox();
            // @ts-ignore
            checkBox.setItems([{
                    label: expectedLabels[0],
                    isDisabled: true
                }]);
        }).toThrowError();
    });
});
