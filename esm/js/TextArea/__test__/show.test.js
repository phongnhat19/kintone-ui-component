/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea show', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('show TextArea with full props component', function () {
        var txtArea1 = new TextArea({ value: 'textarea', isVisible: false });
        txtArea1.show();
        expect(txtArea1.render()).toBeVisible();
    });
});
