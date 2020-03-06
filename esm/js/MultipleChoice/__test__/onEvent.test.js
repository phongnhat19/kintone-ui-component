import { fireEvent } from '@testing-library/dom';
import MultipleChoice from '../index';
describe('Unit test MultipleChoice onEvent', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function onChange event run successfully', function () {
        var items = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
            }
        ];
        var multipleChoice = new MultipleChoice({
            items: items,
            value: [expectedValues[0], expectedValues[1]],
        });
        var container = multipleChoice.render();
        multipleChoice.on('change', function (e) {
            expect(e).toEqual([expectedValues[1]]);
        });
        fireEvent.click(container);
        expect(multipleChoice.getValue()).toEqual([expectedValues[0], expectedValues[1]]);
        fireEvent.click(container.children[0].children[0]);
        expect(multipleChoice.getValue()).toEqual([expectedValues[1]]);
    });
    test('Function onClick event will not work', function () {
        var items = [
            {
                label: expectedLabels[0],
                value: expectedValues[0],
            },
            {
                label: expectedLabels[1],
                value: expectedValues[1],
            }
        ];
        var multipleChoice = new MultipleChoice({
            items: items,
            value: [],
        });
        var container = multipleChoice.render();
        var counter = 0;
        multipleChoice.on('click', function (e) {
            counter += 1;
        });
        fireEvent.click(container);
        expect(counter).toBe(0);
        fireEvent.click(container.children[0].children[0]);
        expect(counter).toBe(0);
    });
});
