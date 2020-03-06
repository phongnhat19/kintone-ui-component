import MultipleChoice from '../index';
describe('Unit test MultipleChoice enable', function () {
    test('Function enable run successfully', function () {
        var expectedLabels = ['Orange', 'Banana', 'Lemon'];
        var expectedValues = ['orange', 'banana', 'lemon'];
        var multipleChoice = new MultipleChoice({
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
                    isDisabled: false
                }
            ],
            isDisabled: true
        });
        var container = multipleChoice.render();
        multipleChoice.enable();
        if (!container.children || container.children.length !== 3) {
            expect(false);
        }
        var items = container.children;
        for (var index = 0; index < 3; index++) {
            var item = items[index];
            if (!item.children || item.children.length !== 2) {
                expect(false);
            }
            // Check input & label elements
            expect(item.classList.contains('kuc-list-item-disable')).toBe(false);
        }
    });
});
