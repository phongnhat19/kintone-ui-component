import Dropdown from '../index';
describe('Unit test Dropdown enableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function enableItem run successfully with full props', function () {
        var dropdown = new Dropdown({
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
        var container = dropdown.render();
        dropdown.enableItem(expectedValues[2]);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        var itemEl = itemsEl[2];
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
    });
    test('throw error with invalid value', function () {
        expect(function () {
            var dropdown = new Dropdown({
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
            // @ts-ignore
            dropdown.disableItem(null);
        }).toThrowError();
    });
});
