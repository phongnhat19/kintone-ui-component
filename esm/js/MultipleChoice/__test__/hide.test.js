import MultipleChoice from '../index';
describe('Unit test MultipleChoice hide', function () {
    test('Function hide run successfully', function () {
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
            isVisible: true
        });
        var container = multipleChoice.render();
        multipleChoice.hide();
        expect(container).not.toBeVisible();
    });
});
