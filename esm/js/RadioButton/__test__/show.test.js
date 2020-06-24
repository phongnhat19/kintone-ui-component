import RadioButton from '../index';
describe('Unit test RadioButton show', function () {
    test('Function show run successfully', function () {
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
            isVisible: false
        });
        var container = radioButton.render();
        radioButton.show();
        expect(container).toBeVisible();
    });
});
