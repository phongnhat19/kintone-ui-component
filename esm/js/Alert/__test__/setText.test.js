/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
describe('Unit test Alert setText', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setText successfully without props Alert component', function () {
        var alert = new Alert();
        alert.setText('alert');
        expect(alert.render().textContent).toBe('alert');
    });
    test('setText error with invalid props Alert component', function () {
        try {
            var alert_1 = new Alert({ text: 'alert' });
            // @ts-ignore
            alert_1.setText(2);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
