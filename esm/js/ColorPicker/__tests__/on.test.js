/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, getByText, getByRole } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import ColorPicker from '../index';
import 'jest-canvas-mock';
describe('[JS] Unit test ColorPicker handle event', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('should be fire onChange event', function () {
        var value = '#666666';
        var colorPicker = new ColorPicker({ color: value });
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe(color);
        });
        colorPicker.on('change', mockCallback);
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(mockCallback).toBeCalled();
    });
    test('should be fire onChange when input is changed', function () {
        var color = '#ff000b';
        var changedColor = '#FFFFFF';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var mockCallback = jest.fn(function (inputColor) {
            expect(inputColor).toBe(changedColor);
        });
        colorPicker.on('change', mockCallback);
        fireEvent.blur(getByRole(textBoxOuter, 'textbox'), { target: { value: changedColor } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(mockCallback).toBeCalled();
    });
    test('should return origin color when clicking Cancel button', function () {
        var color = '#ff000b';
        var changedColor = '#FFFFFF';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var mockCallback = jest.fn(function () { });
        colorPicker.on('change', mockCallback);
        fireEvent.blur(getByRole(textBoxOuter, 'textbox'), { target: { value: changedColor } });
        fireEvent.click(getByText(colorPicker.render(), 'Cancel'), {});
        expect(mockCallback).not.toBeCalled();
        expect(colorPicker.getColor()).toBe(color);
    });
    test('should change value successfully when R input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputROuter = getByText(picker, 'R').nextElementSibling;
        var inputR = inputROuter.firstChild;
        fireEvent.change(inputR, { target: { value: '244' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#f4000b');
    });
    test('should change value successfully when G input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputGOuter = getByText(picker, 'G').nextElementSibling;
        var inputG = inputGOuter.firstChild;
        fireEvent.change(inputG, { target: { value: '244' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#fff40b');
    });
    test('should change value successfully when B input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputBOuter = getByText(picker, 'B').nextElementSibling;
        var inputB = inputBOuter.firstChild;
        fireEvent.change(inputB, { target: { value: '244' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#ff00f4');
    });
    test('should change value successfully when H input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputHOuter = getByText(picker, 'H').nextElementSibling;
        var inputH = inputHOuter.firstChild;
        fireEvent.change(inputH, { target: { value: '0.5' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#00ffff');
    });
    test('should change value successfully when S input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputSOuter = getByText(picker, 'S').nextElementSibling;
        var inputS = inputSOuter.firstChild;
        fireEvent.change(inputS, { target: { value: '0.5' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#ff8085');
    });
    test('should change value successfully when V input is changed', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        var picker = colorPicker.render().lastElementChild;
        var inputVOuter = getByText(picker, 'V').nextElementSibling;
        var inputV = inputVOuter.firstChild;
        fireEvent.change(inputV, { target: { value: '0.5' } });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#800005');
    });
    test('should change value successfully when clicking in color canvas', function () {
        var color = '#ff000b';
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        expect(getByRole(textBoxOuter, 'textbox')).toHaveStyle('background-color: rgb(255, 0, 11)');
        fireEvent.focus(getByRole(textBoxOuter, 'textbox'), { target: { value: '#ff000b' } });
        var picker = colorPicker.render().lastElementChild;
        expect(picker).toHaveStyle('display: block');
        picker.getElementsByTagName('canvas');
        var colorCanvas = picker.getElementsByTagName('canvas')[0];
        // @ts-ignore
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(function () {
            return {
                getImageData: function () {
                    return { data: [71, 43, 45] };
                }
            };
        });
        fireEvent.mouseUp(colorCanvas, { clientX: 130, clientY: 183 });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#472b2d');
    });
    test('should change value successfully when clicking in Hue canvas', function () {
        var color = '#ff000b';
        var mockImageData = [71, 43, 45];
        var colorPicker = new ColorPicker({ color: color });
        var textBoxOuter = colorPicker.render().firstElementChild;
        fireEvent.focus(getByRole(textBoxOuter, 'textbox'), { target: { value: '#ff000b' } });
        var picker = colorPicker.render().lastElementChild;
        expect(picker).toHaveStyle('display: block');
        picker.getElementsByTagName('canvas');
        // @ts-ignore
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(function () {
            return {
                getImageData: function () {
                    return { data: mockImageData };
                }
            };
        });
        var colorCanvas = picker.getElementsByTagName('canvas')[1];
        fireEvent.mouseUp(colorCanvas, { clientX: 130, clientY: 183 });
        fireEvent.click(getByText(colorPicker.render(), 'OK'), {});
        expect(colorPicker.getColor()).toBe('#472b2d');
    });
});
