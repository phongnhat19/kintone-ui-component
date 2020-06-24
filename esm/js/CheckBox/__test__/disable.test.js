import CheckBox from '../index';
describe('Unit test CheckBox disable', function () {
    test('Function disable run successfully', function () {
        var expectedLabels = ['Orange', 'Banana', 'Lemon'];
        var expectedValues = ['orange', 'banana', 'lemon'];
        var checkBox = new CheckBox({
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
                }
            ],
            isDisabled: false
        });
        var container = checkBox.render();
        checkBox.disable();
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
