/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';
describe('Unit test Alert rerender', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('rerender successfully without props Alert component', function () {
        try {
            var alert_1 = new Alert();
            alert_1.rerender();
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
