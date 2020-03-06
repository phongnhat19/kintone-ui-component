/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea getValue', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('getValue successfully with props TextArea component', function () {
        var txtArea2 = new TextArea({ value: 'set value into textarea' });
        expect(txtArea2.getValue()).toBe('set value into textarea');
    });
});
