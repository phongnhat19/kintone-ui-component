import Dropdown from '../index';
describe('Unit test Dropdown hide', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function hide run successfully', function () {
        var dropdown = new Dropdown({
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
                },
            ],
            value: expectedValues[1],
            isVisible: true
        });
        var container = dropdown.render();
        dropdown.hide();
        expect(container).not.toBeVisible();
    });
});
