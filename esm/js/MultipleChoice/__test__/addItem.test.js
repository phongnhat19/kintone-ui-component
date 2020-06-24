import MultipleChoice from '../index';
describe('Unit test MultipleChoice addItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function AddItem run successfully without optional props', function () {
        var multipleChoice = new MultipleChoice();
        var container = multipleChoice.render();
        multipleChoice.addItem({
            value: expectedValues[0]
        });
        if (!container.children || container.children.length !== 1) {
            expect(false);
        }
        var item = container.children[0];
        // Check input & label elements
        expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
        expect(multipleChoice.getItems()).toEqual([{ value: expectedValues[0] }]);
    });
    test('Function AddItem run successfully with full props', function () {
        var multipleChoice = new MultipleChoice();
        var container = multipleChoice.render();
        multipleChoice.addItem({
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: true
        });
        if (!container.children || container.children.length !== 1) {
            expect(false);
        }
        var item = container.children[0];
        var labelEl = item.children[1];
        // Check input, label, isDisabled properties
        expect(multipleChoice.getItems()).toEqual([{
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: true
            }]);
        expect(labelEl.textContent).toBe(expectedLabels[0]);
        expect(item.classList.contains('kuc-list-item-disable')).toBe(true);
    });
    test('Throw error without item', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            // @ts-ignore
            multipleChoice.addItem(null);
        }).toThrowError();
    });
    test('Throw error without item.value', function () {
        expect(function () {
            var multipleChoice = new MultipleChoice();
            // @ts-ignore
            multipleChoice.addItem({
                label: expectedLabels[0],
                isDisabled: true
            });
        }).toThrowError();
    });
});
