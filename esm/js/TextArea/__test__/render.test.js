/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
describe('Unit test TextArea render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render TextArea without props component', function () {
        var txtArea1 = new TextArea();
        expect(txtArea1.render()).toHaveClass('kuc-textarea-outer');
    });
    test('render TextArea with empty props component', function () {
        var txtArea2 = new TextArea({});
        expect(txtArea2.render()).toHaveClass('kuc-textarea-outer');
    });
    test('render TextArea with full props component', function () {
        var txtArea = new TextArea({ value: 'textarea' });
        expect(txtArea.render()).toHaveClass('kuc-textarea-outer');
    });
});
