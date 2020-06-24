/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea enable', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('enable successfull TextArea component', function () {
        var txtArea1 = new TextArea({ value: 'textarea', isDisabled: true });
        txtArea1.enable();
        expect(txtArea1.render().getAttribute('disabled')).toBeNull();
        expect(txtArea1.render().querySelector('textarea')).toBeEnabled();
    });
});
