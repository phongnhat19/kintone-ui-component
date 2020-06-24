import IconButton from '../index';
import { fireEvent } from '@testing-library/react';
describe('Unit test IconButton on event', function () {
    test('Function onClick event run successfully', function () {
        var iconButton = new IconButton({});
        var container = iconButton.render();
        var buttonTag = null;
        iconButton.on('click', function (e) {
            buttonTag = e.target ? e.target.tagName : null;
        });
        fireEvent.click(container);
        expect(buttonTag).toBe('BUTTON');
    });
    test('Function onClick event will not run caused by disabled', function () {
        var iconButton = new IconButton({
            isDisabled: true
        });
        var container = iconButton.render();
        var buttonTag = null;
        iconButton.on('click', function (e) {
            buttonTag = e.target ? e.target.tagName : null;
        });
        fireEvent.click(container);
        expect(buttonTag).toBeNull();
    });
    test('Function onChange event will not run', function () {
        var iconButton = new IconButton({});
        var container = iconButton.render();
        var buttonTag = null;
        // @ts-ignore
        iconButton.on('change', function (e) {
            buttonTag = e.target ? e.target.tagName : null;
        });
        fireEvent.click(container);
        expect(buttonTag).toBeNull();
    });
});
