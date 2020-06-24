import MultipleChoice from '../index';
describe('Unit test MultipleChoice setItems and getItems', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    var expectedIsDisabled = [false, true, true];
    test('Function setValue & getValue run successfully with full props', function () {
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: expectedIsDisabled[0]
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                    isDisabled: expectedIsDisabled[1]
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2],
                    isDisabled: expectedIsDisabled[2]
                }
            ]
        });
        var container = multipleChoice.render();
        multipleChoice.setValue([expectedValues[0], expectedValues[1]]);
        // Check getItems
        var selectedItem = multipleChoice.getValue() || [];
        expect(selectedItem).toEqual([expectedValues[0], expectedValues[1]]);
        // Check dom
        var items = container.children;
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            // Check selected items
            if (selectedItem.indexOf(expectedValues[index]) > -1) {
                expect(item.classList.contains('kuc-list-item-selected')).toBe(true);
            }
            else {
                expect(item.classList.contains('kuc-list-item-selected')).toBe(false);
            }
        }
    });
    test('Throw error without value', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            // @ts-ignore
            multipleChoice.setValue(null);
        }).toThrowError();
    });
    test('Throw error with invalid value', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            multipleChoice.setValue([expectedValues[0]]);
        }).toThrowError();
    });
    test('Throw error with duplicate value', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice({
                items: [
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
                ]
            });
            multipleChoice.setValue([expectedValues[0], expectedValues[0]]);
        }).toThrowError();
    });
});
