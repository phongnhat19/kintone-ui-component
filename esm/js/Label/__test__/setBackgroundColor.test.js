/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
describe('Unit test Label setBackgroundColor', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setBackgroundColor successfully with full props Label component', function () {
        var label = new Label({ text: 'This is Label', backgroundColor: 'red', isDisabled: true, isVisible: true, textColor: 'blue' });
        label.setBackgroundColor('blue');
        expect(label.render().firstElementChild.style.backgroundColor).toBe('blue');
    });
    test('setBackgroundColor expect to throw error with props value number Label component', function () {
        try {
            var label = new Label({ text: 'label', backgroundColor: 'blue' });
            // @ts-ignore
            label.setBackgroundColor(1);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
