import Button from '../index';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Button onEvent', function () {
    test('Function onClick event run successfully', function () {
        var button = new Button();
        var container = button.render();
        button.on('click', function (e) {
            if (e.target) {
                button.setText(e.target.value);
            }
        });
        fireEvent.click(container, { target: { value: 'on click' } });
        expect(container.textContent).toBe('on click');
    });
    test('Function onClick event will not run when disabled', function () {
        var button = new Button();
        var container = button.render();
        button.disable();
        button.on('click', function (e) {
            expect(false);
        });
        fireEvent.click(container, { target: { value: 'on click' } });
    });
    test('Function onChange event will not run', function () {
        var button = new Button({ text: 'onChange not worked' });
        var container = button.render();
        // @ts-ignore
        button.on('change', function (e) {
            if (e.target) {
                button.setText(e.target.value);
            }
        });
        fireEvent.click(container, { target: { value: 'on change' } });
        expect(container.textContent).toBe('onChange not worked');
    });
});
