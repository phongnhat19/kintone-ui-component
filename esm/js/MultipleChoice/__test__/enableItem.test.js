import MultipleChoice from '../index';
describe('Unit test MultipleChoice enableItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function enableItem run successfully', function () {
        var multipleChoice = new MultipleChoice({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: true
                }
            ]
        });
        var container = multipleChoice.render();
        multipleChoice.enableItem(expectedValues[0]);
        var items = container.children;
        var item = items[0];
        expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
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
            multipleChoice.enableItem();
        }).toThrowError();
    });
});
