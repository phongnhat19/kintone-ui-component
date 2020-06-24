import Dropdown from '../index';
describe('Unit test Dropdown enable', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function enable run successfully', function () {
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
            isDisabled: true
        });
        var container = dropdown.render();
        dropdown.enable();
        expect(container.getAttribute('disabled')).toBe(null);
    });
});
