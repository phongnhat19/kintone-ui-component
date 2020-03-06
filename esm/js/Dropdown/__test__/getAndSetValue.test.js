import Dropdown from '../index';
describe('Unit test Dropdown setValue and getValue', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function getValue and setValue run successfully with full props', function () {
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
            ]
        });
        var container = dropdown.render();
        dropdown.setValue(expectedValues[1]);
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (var i = 0; i < itemsEl.length; i++) {
            var itemEl = itemsEl[i];
            var itemLabelEl = itemEl.children[1];
            expect(itemLabelEl.innerText).toBe(expectedLabels[i]);
            if (i <= 1) {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(false);
            }
            else {
                expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
            }
        }
        expect(dropdown.getValue()).toBe(expectedValues[1]);
    });
    test('throw error without value', function () {
        expect(function () {
            var dropdown = new Dropdown();
            // @ts-ignore
            dropdown.setValue(null);
        }).toThrowError();
    });
    test('throw error with nonexistent value', function () {
        expect(function () {
            var dropdown = new Dropdown();
            dropdown.setValue(expectedValues[1]);
        }).toThrowError();
    });
    test('throw error with number value', function () {
        expect(function () {
            var dropdown = new Dropdown();
            // @ts-ignore
            dropdown.setValue(1);
        }).toThrowError();
    });
});
