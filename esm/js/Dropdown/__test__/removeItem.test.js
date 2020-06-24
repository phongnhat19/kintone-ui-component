import Dropdown from '../index';
describe('Unit test Dropdown removeItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function removeItem run successfully', function () {
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
                }
            ],
            value: expectedValues[1]
        });
        var container = dropdown.render();
        dropdown.removeItem(1);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 2) {
            expect(false);
        }
        expect(dropdown.getItems()).toEqual([
            {
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            },
            {
                label: expectedLabels[2],
                value: expectedValues[2],
                isDisabled: true
            }
        ]);
        expect(dropdown.getValue()).toBe(null);
    });
    test('Function removeItem run with invalid index', function () {
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
                }
            ],
            value: expectedValues[1]
        });
        // @ts-ignore
        dropdown.removeItem('abc');
        expect(dropdown.getItems()).toEqual([
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
            }
        ]);
        expect(dropdown.getValue()).toBe(expectedValues[1]);
    });
    test('Function removeItem run with out of index', function () {
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
                }
            ],
            value: expectedValues[1]
        });
        dropdown.removeItem(5);
        expect(dropdown.getItems()).toEqual([
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
            }
        ]);
        expect(dropdown.getValue()).toBe(expectedValues[1]);
    });
});
