import CheckBox from '../index';
describe('Unit test CheckBox setValue and getValue', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    var expectedIsDisabled = [false, true, true];
    test('Function setValue & getValue run successfully with full props', function () {
        var checkBox = new CheckBox({
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
        var container = checkBox.render();
        checkBox.setValue([expectedValues[0], expectedValues[1]]);
        // check getItems
        var selectedItem = checkBox.getValue() || [];
        expect(selectedItem).toEqual([expectedValues[0], expectedValues[1]]);
        // check dom
        var items = container.children;
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
            // check selected items
            if (selectedItem.indexOf(expectedValues[index]) > -1) {
                expect(inputEl.checked).toBeTruthy();
            }
            else {
                expect(inputEl.checked).toBeFalsy();
            }
        }
    });
    test('throw error without value', function () {
        expect(function () {
            var checkBox = new CheckBox();
            // @ts-ignore
            checkBox.setValue(null);
        }).toThrowError();
    });
    test('throw error with invalid value', function () {
        expect(function () {
            var checkBox = new CheckBox();
            checkBox.setValue([expectedValues[0]]);
        }).toThrowError();
    });
    test('throw error with duplicate value', function () {
        expect(function () {
            var checkBox = new CheckBox({
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
            checkBox.setValue([expectedValues[0], expectedValues[0]]);
        }).toThrowError();
    });
});
