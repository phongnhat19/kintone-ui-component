import RadioButton from '../index';
describe('Unit test RadioButton addItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function AddItem run successfully without optional props', function () {
        var radioButton = new RadioButton();
        var container = radioButton.render();
        radioButton.addItem({
            value: expectedValues[0]
        });
        if (!container.children || container.children.length !== 1) {
            expect(false);
        }
        var item = container.children[0];
        var inputEl = item.children[0];
        // check input & label elements
        expect(inputEl).not.toBeDisabled();
        expect(radioButton.getItems()).toEqual([{ value: expectedValues[0] }]);
    });
    test('Function AddItem run successfully with full props', function () {
        var radioButton = new RadioButton();
        var container = radioButton.render();
        radioButton.addItem({
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: true
        });
        if (!container.children || container.children.length !== 1) {
            expect(false);
        }
        var item = container.children[0];
        var inputEl = item.children[0];
        var labelEl = item.children[1];
        // check input, label, isDisabled properties
        expect(radioButton.getItems()).toEqual([{
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: true
            }]);
        expect(labelEl.innerText).toBe(expectedLabels[0]);
        expect(inputEl).toBeDisabled();
    });
    test('throw error without item', function () {
        expect(function () {
            var radioButton = new RadioButton();
            // @ts-ignore
            radioButton.addItem(null);
        }).toThrowError();
    });
    test('throw error without item.value', function () {
        expect(function () {
            var radioButton = new RadioButton();
            // @ts-ignore
            radioButton.addItem({
                label: expectedLabels[0],
                isDisabled: true
            });
            // 必須項目のvalueを省略してもエラーが発生しない
        }).toThrowError();
    });
});
