/* eslint-disable @typescript-eslint/no-empty-function */
import { getByRole } from '@testing-library/dom';
import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';
describe('[JS] Unit test ColorPicker setColor', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should setColor successfully', function () {
        var colorPicker = new ColorPicker({ color: '#FF0000' });
        colorPicker.setColor('#666666');
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(102, 102, 102)');
    });
    test('should throw error when setColor has invalid color param', function () {
        var colorPicker = new ColorPicker({ color: '#FF0000' });
        colorPicker.setColor('#666fff');
        expect(function () {
            colorPicker.setColor('#666ffff');
        }).toThrowError(Message.colorPicker.INVALID_COLOR);
    });
});
