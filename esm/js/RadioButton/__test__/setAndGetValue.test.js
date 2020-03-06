import RadioButton from '../index';
describe('Unit test RadioButton setValue and getValue', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    var expectedIsDisabled = [false, true, true];
    test('Function setItems & getItems run successfully with full props', function () {
        var radioButton = new RadioButton({
            name: 'fruit',
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
        var container = radioButton.render();
        radioButton.setValue(expectedValues[1]);
        // check getItems
        var selectedItem = radioButton.getValue() || [];
        expect(selectedItem).toEqual(expectedValues[1]);
        // check dom
        var items = container.children;
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
            // check selected items
            if (selectedItem === expectedValues[index]) {
                expect(inputEl.checked).toBeTruthy();
            }
            else {
                expect(inputEl.checked).toBeFalsy();
            }
        }
    });
    test('throw error without value', function () {
        expect(function () {
            var radioButton = new RadioButton();
            // @ts-ignore
            radioButton.setValue(null);
            // 必須項目をnullで渡してもエラーが発生しない
        }).toThrowError();
    });
    test('throw error with invalid value', function () {
        expect(function () {
            var radioButton = new RadioButton();
            radioButton.setValue(expectedValues[0]);
        }).toThrowError();
    });
});
