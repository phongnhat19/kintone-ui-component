import MultipleChoice from '../index';
describe('Unit test MultipleChoice show', function () {
    test('Function show run successfully', function () {
        var expectedLabels = ['Orange', 'Banana', 'Lemon'];
        var expectedValues = ['orange', 'banana', 'lemon'];
        var multipleChoice = new MultipleChoice({
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
        var container = multipleChoice.render();
        multipleChoice.show();
        expect(container).toBeVisible();
    });
});
