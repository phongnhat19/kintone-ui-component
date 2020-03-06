/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
describe('Unit test Alert setType', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setType successfully without props Alert component', function () {
        var alert = new Alert();
        alert.setType('error');
        expect(alert.render().className).toBe('kuc-alert bg-danger');
    });
    test('setType error with invalid props Alert component', function () {
        try {
            var alert_1 = new Alert({ type: 'success' });
            // @ts-ignore
            alert_1.setType('danger');
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
});
