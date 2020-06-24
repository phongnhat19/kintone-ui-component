/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';
describe('[JS] Text', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onClick should not be fired when Text component is disabled', function () {
        var mockCallback = jest.fn(function () { });
        var defaultValue = 'success';
        var text = new Text({ value: defaultValue, isDisabled: true });
        text.render();
        text.on('click', mockCallback);
        fireEvent.click(text.render(), { target: { value: defaultValue } });
        expect(mockCallback).toBeCalledTimes(0);
    });
    test('onChange event handler should fire successfully', function () {
        var defaultValue = 'success';
        var changeValue = 'hello';
        var text = new Text({ value: defaultValue });
        text.render();
        var mockCallback = jest.fn(function (event) {
            expect(event.target.value).toBe(changeValue);
        });
        text.on('change', mockCallback);
        fireEvent.change(text.render(), { target: { value: changeValue } });
        expect(mockCallback).toBeCalled();
        expect(text.getValue()).toBe(changeValue);
    });
    test('onClick event handler should fire successfully', function () {
        var defaultValue = 'success';
        var text = new Text({ value: defaultValue });
        text.render();
        var mockCallback = jest.fn(function (event) {
            expect(event.target.value).toBe(defaultValue);
        });
        text.on('click', mockCallback);
        fireEvent.click(text.render(), { target: { value: defaultValue } });
        expect(mockCallback).toBeCalled();
    });
});
