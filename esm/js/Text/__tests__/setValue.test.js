/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
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
    test('should setValue() and getValue() successfully', function () {
        var value = 'hello';
        var text = new Text({ value: undefined });
        expect(text.render()).toHaveValue('');
        text.setValue(value);
        expect(text.getValue()).toBe(value);
    });
    test('should setValue() null for rerender successfully', function () {
        var text = new Text({ value: 'kintone' });
        // @ts-ignore
        text.setValue(null);
        expect(text.render()).toHaveValue('');
    });
    test('should setValue() throw error when setValue is called without parameters ', function () {
        try {
            var text = new Text();
            // @ts-ignore
            text.setValue();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
