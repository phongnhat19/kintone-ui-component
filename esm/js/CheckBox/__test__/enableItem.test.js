import CheckBox from '../index';
describe('Unit test CheckBox enableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function enableItem run successfully', function () {
        var checkBox = new CheckBox({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: true
                }
            ]
        });
        var container = checkBox.render();
        checkBox.enableItem(expectedValues[0]);
        var items = container.children;
        var item = items[0];
        var inputEl = item.children[0];
        expect(inputEl).not.toBeDisabled();
    });
    test('throw error without prop', function () {
        expect(function () {
            var checkBox = new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: true
                    }
                ]
            });
            // @ts-ignore
            checkBox.enableItem();
        }).toThrowError();
    });
});
