/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent } from '@testing-library/dom';
import ColorPicker from '../index';
import Message from '../../../constant/Message';
import 'jest-canvas-mock';
// TODO: Remove unreachable if path line 41 (unnecessary if) index.ts
describe('[JS] Unit test ColorPicker render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should be render successfully', function () {
        var colorPicker = new ColorPicker({ color: '#ff000b' });
        expect(colorPicker.render().firstElementChild).toBeTruthy();
        var textBoxOuter = colorPicker.render().firstElementChild.firstElementChild;
        expect(textBoxOuter).toHaveStyle('background-color: rgb(255, 0, 11)');
        expect(colorPicker.render().getElementsByClassName('kuc-btn submit').length).toEqual(1);
        expect(colorPicker.render().getElementsByClassName('kuc-btn normal').length).toEqual(1);
    });
    test('should render successfully with no param is specifing', function () {
        var colorPicker = new ColorPicker({});
        expect(colorPicker.render().firstElementChild).toBeTruthy();
        var textBoxOuter = colorPicker.render().firstElementChild.firstElementChild;
        expect(textBoxOuter).toHaveStyle('background-color: rgb(255, 0, 0)');
    });
    test('should disable when isDisabled param is true', function () {
        var colorPicker = new ColorPicker({ isDisabled: true });
        var textBox = colorPicker.render().firstElementChild.firstElementChild;
        expect(textBox).toBeDisabled();
    });
    test('should show color picker when focus on text input', function () {
        var colorPicker = new ColorPicker({});
        expect(colorPicker.render().firstElementChild).toBeTruthy();
        var textBoxOuter = colorPicker.render().firstElementChild.firstElementChild;
        fireEvent.focus(textBoxOuter, { target: { value: '#ffffff' } });
        expect(textBoxOuter).toHaveStyle('border: 1px solid #e3e7e8');
    });
    test('should close color picker when focus out this component', function () {
        var colorPicker = new ColorPicker({});
        expect(colorPicker.render().firstElementChild).toBeTruthy();
        var textBoxOuter = colorPicker.render().firstElementChild.firstElementChild;
        fireEvent.focus(textBoxOuter, { target: { value: '#ffffff' } });
        fireEvent.mouseDown(document);
        expect(colorPicker.render().lastElementChild).toHaveStyle('display: none');
    });
    test('should throw error when invalid color param', function () {
        expect(function () {
            new ColorPicker({ color: '#12345342' });
        }).toThrowError(Message.colorPicker.INVALID_COLOR);
    });
});
