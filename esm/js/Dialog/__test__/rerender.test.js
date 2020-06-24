/* eslint-disable @typescript-eslint/no-empty-function */
import Dialog from '../index';
describe('Unit test Dialog render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Function rerender work normally with no params', function () {
        var myDialog = new Dialog({});
        try {
            myDialog.rerender();
        }
        catch (error) {
            expect(false).toEqual(true);
        }
    });
});
