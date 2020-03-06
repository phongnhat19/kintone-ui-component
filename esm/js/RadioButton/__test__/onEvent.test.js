import { fireEvent } from '@testing-library/dom';
import RadioButton from '../index';
describe('Unit test RadioButton onEvent', function () {
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
        var radioButton = new RadioButton({
            name: 'fruit',
            items: items,
            value: expectedValues[0],
        });
        var container = radioButton.render();
        radioButton.on('change', function (e) {
            expect(e).toEqual(expectedValues[1]);
        });
        fireEvent.click(container);
        expect(radioButton.getValue()).toEqual(expectedValues[0]);
        fireEvent.click(container.children[1].children[1]);
        expect(radioButton.getValue()).toEqual(expectedValues[1]);
    });
    test('Function onClick event will not work', function () {
        // ユーザーガイド上はchangeイベントのみサポートとなっている
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
        var radioButton = new RadioButton({
            name: 'fruit',
            items: items,
            value: expectedValues[0],
        });
        var container = radioButton.render();
        var counter = 1;
        // @ts-ignore
        radioButton.on('click', function (e) {
            radioButton.setValue(expectedValues[counter]);
        });
        fireEvent.click(container);
        expect(radioButton.getValue()).toEqual(expectedValues[0]);
        fireEvent.click(container.children[1]);
        expect(radioButton.getValue()).toEqual(expectedValues[0]);
    });
});
