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
    test('should disable() successfully', function () {
        var mockCallback = jest.fn(function () { });
        var defaultValue = 'success';
        var text = new Text({ value: defaultValue });
        text.disable();
        expect(text.render()).toBeDisabled();
        fireEvent.change(text.render(), { target: { value: defaultValue } });
        expect(mockCallback).toBeCalledTimes(0);
    });
});
