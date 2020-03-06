import RadioButton from '../index';
describe('Unit test RadioButton enableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function enableItem run successfully', function () {
        var radioButton = new RadioButton({
            name: 'fruit',
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: false
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                    isDisabled: false
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2],
                    isDisabled: true
                },
            ]
        });
        var container = radioButton.render();
        radioButton.enableItem(expectedValues[2]);
        var items = container.children;
        var item = items[0];
        var inputEl = item.children[0];
        expect(inputEl).not.toBeDisabled();
    });
    test('throw error without prop', function () {
        expect(function () {
            var radioButton = new RadioButton({
                name: 'fruit',
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: true
                    }
                ]
            });
            // @ts-ignore
            radioButton.enableItem();
        }).toThrowError();
    });
});
