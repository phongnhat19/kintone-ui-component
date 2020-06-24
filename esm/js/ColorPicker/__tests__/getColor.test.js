/* eslint-disable @typescript-eslint/no-empty-function */
import ColorPicker from '../index';
import 'jest-canvas-mock';
describe('[JS] Unit test ColorPicker getColor', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should getColor successfully', function () {
        var colorPicker = new ColorPicker({ color: '#FF0000' });
        colorPicker.setColor('#666666');
        expect(colorPicker.getColor()).toBe('#666666');
    });
    test('should return default color when not specify color', function () {
        var colorPicker = new ColorPicker();
        expect(colorPicker.getColor()).toBe('#ff0000');
    });
});
