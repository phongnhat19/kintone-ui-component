import MultipleChoice from '../index';
describe('Unit test MultipleChoice setItems and getItems', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    var expectedIsDisabled = [false, true, true];
    test('Function setItems & getItems run successfully with full props', function () {
        var multipleChoice = new MultipleChoice();
        var container = multipleChoice.render();
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
        multipleChoice.setItems(newItems);
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
            if (expectedIsDisabled[index]) {
                expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
            }
            else {
                expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
            }
            expect(labelEl.textContent).toBe(expectedLabels[index]);
        }
        // Check getItems
        expect(multipleChoice.getItems()).toEqual(newItems);
    });
    test('Function AddItem run successfully without optional props', function () {
        var multipleChoice = new MultipleChoice();
        var container = multipleChoice.render();
        var newItems = [
            {
                value: expectedValues[0]
            }
        ];
        multipleChoice.setItems(newItems);
        var items = container.children;
        var item = items[0];
        if (!item.children || item.children.length !== 1) {
            expect(false);
        }
        // Check input & label elements
        expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
        // Check getItems
        expect(multipleChoice.getItems()).toEqual(newItems);
    });
    test('Throw error without items', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            // @ts-ignore
            multipleChoice.setItems(null);
        }).toThrowError();
    });
    test('Throw error without item.value', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            // @ts-ignore
            multipleChoice.setItems([{
                    label: expectedLabels[0],
                    isDisabled: true
                }]);
            // No error occurs even if the value of required item is not specified
        }).toThrowError();
    });
});
