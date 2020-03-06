import CheckBox from '../index';
describe('Unit test CheckBox addItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function AddItem run successfully without optional props', function () {
        var checkBox = new CheckBox();
        var container = checkBox.render();
        checkBox.addItem({
            value: expectedValues[0]
        });
        if (!container.children || container.children.length !== 1) {
            expect(false);
        }
        var item = container.children[0];
        var inputEl = item.children[0];
        // check input & label elements
        expect(inputEl).not.toBeDisabled();
        expect(checkBox.getItems()).toEqual([{ value: expectedValues[0] }]);
    });
    test('Function AddItem run successfully with full props', function () {
        var checkBox = new CheckBox();
        var container = checkBox.render();
        checkBox.addItem({
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
        expect(checkBox.getItems()).toEqual([{
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: true
            }]);
        expect(labelEl.textContent).toBe(expectedLabels[0]);
        expect(inputEl).toBeDisabled();
    });
    test('throw error without item', function () {
        expect(function () {
            var checkBox = new CheckBox();
            // @ts-ignore
            checkBox.addItem(null);
        }).toThrowError();
    });
    test('throw error without item.value', function () {
        expect(function () {
            var checkBox = new CheckBox();
            // @ts-ignore
            checkBox.addItem({
                label: expectedLabels[0],
                isDisabled: true
            });
        }).toThrowError();
    });
});
