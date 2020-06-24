/* eslint-disable @typescript-eslint/no-empty-function */
import Label from '../index';
describe('Unit test Label rerender', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('rerender successfully without props Label component', function () {
        try {
            var label = new Label();
            expect(label.rerender()).toBe('kuc-label');
        }
        catch (error) {
            expect(false);
        }
    });
});
