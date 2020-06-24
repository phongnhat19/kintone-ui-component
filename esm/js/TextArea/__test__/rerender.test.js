/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea rerender', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('rerender without props TextArea component', function () {
        try {
            var txtArea1 = new TextArea();
            txtArea1.rerender();
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
