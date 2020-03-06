import Dropdown from '../index';
describe('Unit test Dropdown addItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function addItem run successfully without optional props', function () {
        var dropdown = new Dropdown();
        var container = dropdown.render();
        dropdown.addItem({
            value: expectedValues[0]
        });
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 1) {
            expect(false);
        }
        var itemEl = itemsEl[0];
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
        expect(dropdown.getItems()).toEqual([{ value: expectedValues[0] }]);
    });
    test('Function addItem run successfully with full props', function () {
        var dropdown = new Dropdown();
        var container = dropdown.render();
        dropdown.addItem({
            value: expectedValues[0],
            label: expectedLabels[0],
            isDisabled: true
        });
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 1) {
            expect(false);
        }
        var itemEl = itemsEl[0];
        expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
        expect(dropdown.getItems()).toEqual([{
                value: expectedValues[0],
                label: expectedLabels[0],
                isDisabled: true
            }]);
    });
    test('throw error without item', function () {
        expect(function () {
            var dropdown = new Dropdown();
            // @ts-ignore
            dropdown.addItem(null);
        }).toThrowError();
    });
    test('throw error without item.value', function () {
        expect(function () {
            var dropdown = new Dropdown();
            // @ts-ignore
            dropdown.addItem({
                label: expectedLabels[0],
                isDisabled: true
            });
        }).toThrowError();
    });
    test('throw error with duplicate items', function () {
        expect(function () {
            var dropdown = new Dropdown({
                items: [
                    {
                        value: expectedValues[1]
                    }
                ]
            });
            dropdown.addItem({ value: expectedValues[1] });
        }).toThrowError();
    });
});
