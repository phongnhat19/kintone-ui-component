/* eslint-disable @typescript-eslint/no-empty-function */
import Spinner from '../index';
describe('Unit test Spinner render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render successfully without props Spinner component', function () {
        var spinner = new Spinner();
        expect(spinner.render().className).toBe('kuc-spinner-outer');
        expect(spinner.render()).not.toBeVisible();
    });
    test('render successfully with props Spinner component', function () {
        var spinner = new Spinner({ isVisible: true });
        expect(spinner.render().className).toBe('kuc-spinner-outer');
        expect(spinner.render()).toBeVisible();
    });
});
