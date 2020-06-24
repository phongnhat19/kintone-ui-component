import MultipleChoice from '../index';
describe('Unit test MultipleChoice disableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function disableItem run successfully', function () {
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: false
                }
            ]
        });
        var container = multipleChoice.render();
        multipleChoice.disableItem(expectedValues[0]);
        var items = container.children;
        var item = items[0];
        expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
    });
    test('Throw error without prop', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: true
                    }
                ]
            });
            // @ts-ignore
            multipleChoice.disableItem();
        }).toThrowError();
    });
});
