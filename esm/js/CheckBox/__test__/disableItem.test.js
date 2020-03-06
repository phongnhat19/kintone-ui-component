import CheckBox from '../index';
describe('Unit test CheckBox disableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function disableItem run successfully', function () {
        var checkBox = new CheckBox({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: false
                }
            ]
        });
        var container = checkBox.render();
        checkBox.disableItem(expectedValues[0]);
        var items = container.children;
        var item = items[0];
        var inputEl = item.children[0];
        expect(inputEl).toBeDisabled();
    });
    test('throw error without prop', function () {
        expect(function () {
            var checkBox = new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            // @ts-ignore
            checkBox.disableItem();
        }).toThrowError();
    });
});
