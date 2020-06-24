/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import 'jest-canvas-mock';
describe('[JS] Unit test ColorPicker disable', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should disable successfully', function () {
        var colorPicker = new ColorPicker({ color: '#FF0000' });
        colorPicker.disable();
        var textBox = colorPicker.render().firstElementChild.firstElementChild;
        expect(textBox).toBeDisabled();
    });
});
