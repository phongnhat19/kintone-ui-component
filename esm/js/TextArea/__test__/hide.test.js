/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea hide', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('hide TextArea with props component', function () {
        var txtArea1 = new TextArea({ value: 'textarea', isVisible: true });
        txtArea1.hide();
        expect(txtArea1.render()).not.toBeVisible();
    });
});
