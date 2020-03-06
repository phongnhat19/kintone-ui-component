/* eslint-disable @typescript-eslint/no-empty-function */
import Alert from '../index';
describe('Unit test Alert render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render successfully without props Alert component', function () {
        var alert = new Alert();
        expect(alert.render().className).toBe('kuc-alert bg-danger');
    });
    test('render successfully with full props Alert type success', function () {
        var alert = new Alert({ type: 'success', isDisabled: true, isVisible: false, text: 'alert' });
        expect(alert.render().className).toBe('kuc-alert bg-success');
    });
    test('render successfully with full props Alert type error', function () {
        var alert = new Alert({ type: 'error', text: '' });
        expect(alert.render().className).toBe('kuc-alert bg-danger');
    });
});
