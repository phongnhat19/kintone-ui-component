import RadioButton from '../index';
describe('Unit test RadioButton disable', function () {
    test('Function disable run successfully', function () {
        var expectedLabels = ['Orange', 'Banana', 'Lemon'];
        var expectedValues = ['orange', 'banana', 'lemon'];
        var radioButton = new RadioButton({
            name: 'fruit',
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2],
                }
            ],
            isDisabled: false
        });
        var container = radioButton.render();
        radioButton.disable();
        if (!container.children || container.children.length !== 3) {
            expect(false);
        }
        var items = container.children;
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            var inputEl = item.children[0];
            // check input & label elements
            expect(inputEl).toBeDisabled();
        }
    });
});
