import Dropdown from '../index';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Dropdown onEvent', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function onChange event run successfully', function () {
        var dropdown = new Dropdown({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0]
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1]
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2]
                },
            ],
            value: expectedValues[1],
            isDisabled: false,
            isVisible: true
        });
        var container = dropdown.render();
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        var itemEl = itemsEl[2];
        dropdown.on('change', function (e) {
            expect(e).toBe(expectedValues[2]);
        });
        fireEvent.click(itemEl);
        var selectedTextEl = container.querySelector('.kuc-dropdown-selected-label');
        expect(selectedTextEl.innerText).toBe(expectedLabels[2]);
    });
    test('Function onClick event will not work', function () {
        var dropdown = new Dropdown({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0]
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1]
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2]
                },
            ],
            value: expectedValues[1],
            isDisabled: false,
            isVisible: true
        });
        var container = dropdown.render();
        var itemsEl = container.querySelector('.kuc-list-outer').children;
        var itemEl = itemsEl[2];
        var counter = 0;
        dropdown.on('click', function (e) {
            counter += 1;
        });
        fireEvent.click(itemEl);
        expect(counter).toBe(0);
    });
});
