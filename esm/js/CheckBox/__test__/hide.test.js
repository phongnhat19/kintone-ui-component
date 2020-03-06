import CheckBox from '../index';
describe('Unit test CheckBox hide', function () {
    test('Function hide run successfully', function () {
        var expectedLabels = ['Orange', 'Banana', 'Lemon'];
        var expectedValues = ['orange', 'banana', 'lemon'];
        var checkBox = new CheckBox({
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
            isVisible: true
        });
        var container = checkBox.render();
        checkBox.hide();
        expect(container).not.toBeVisible();
    });
});
