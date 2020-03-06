/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea setValue', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setValue TextArea component with props', function () {
        var txtArea2 = new TextArea({ value: 'set value into textarea' });
        txtArea2.setValue('');
        expect(txtArea2.getValue()).toBe('');
    });
});
