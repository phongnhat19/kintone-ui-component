import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-canvas-mock';
import Message from '../../../constant/Message';
import ColorPicker from '../index';
describe('<ColorPicker/>', function () {
    test('should be render successfully', function () {
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b" })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
        expect(getByText('OK')).toHaveClass('kuc-btn submit');
        expect(getByText('Cancel')).toHaveClass('kuc-btn normal');
    });
    test('should return origin color when clicking Cancel button', function () {
        var changedColor = '#FFFFFF';
        var mockCallback = jest.fn(function (color) { });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        fireEvent.blur(getAllByRole('textbox')[0], { target: { value: changedColor } });
        fireEvent.click(getByText('Cancel'), {});
        expect(mockCallback).toBeCalledTimes(1);
        expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
    });
    test('should change color when clicking OK button', function () {
        var changedColor = '#FFFFFF';
        var mockCallback = jest.fn(function () { });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        fireEvent.blur(getAllByRole('textbox')[0], { target: { value: changedColor } });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
        expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 255, 255)');
    });
    test('should close color picker when focus out this component', function () {
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b" })), container = _a.container, getAllByRole = _a.getAllByRole;
        fireEvent.focus(getAllByRole('textbox')[0], { target: { value: '#ffffff' } });
        expect(container.lastElementChild).toHaveStyle('display: block');
        fireEvent.mouseDown(document);
        expect(getAllByRole('textbox')[0].parentElement.nextSibling).not.toBeVisible();
    });
    test('should throw error when invalid color param', function () {
        // @ts-ignore
        jest.spyOn(console, 'error').mockImplementationOnce(function () { });
        expect(function () {
            render(React.createElement(ColorPicker, { color: "#12345342" }));
        }).toThrowError(Message.colorPicker.INVALID_COLOR);
    });
    test('should invisible when isVisible param is false', function () {
        var container = render(React.createElement(ColorPicker, { isVisible: false })).container;
        expect(container).toContainHTML('<div></div>');
    });
    test('should change value successfully when R input is changed', function () {
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#f4000b');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        expect(getAllByRole('textbox')[0]).toHaveStyle('background-color: rgb(255, 0, 11)');
        fireEvent.blur(getAllByRole('textbox')[1], { target: { value: '244' } });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
    test('should change value successfully when G input is changed', function () {
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#fff40b');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        fireEvent.blur(getAllByRole('textbox')[2], { target: { value: '244' } });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
    test('should change value successfully when B input is changed', function () {
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#ff00f4');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        fireEvent.blur(getAllByRole('textbox')[3], { target: { value: '244' } });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
    test('should change value successfully when H input is changed', function () {
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#00ffff');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText;
        fireEvent.blur(getAllByRole('textbox')[4], { target: { value: '0.5' } });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
    test('should change value successfully when clicking in color canvas', function () {
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#472b2d');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText, container = _a.container;
        fireEvent.focus(getAllByRole('textbox')[0], { target: { value: '#ff000b' } });
        var colorCanvas = container.getElementsByTagName('canvas')[0];
        // @ts-ignore
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(function () {
            return {
                getImageData: function () {
                    return { data: [71, 43, 45] };
                }
            };
        });
        fireEvent.mouseUp(colorCanvas, { clientX: 130, clientY: 183 });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
    test('should change value successfully when clicking in Hue canvas', function () {
        var mockImageData = [71, 43, 45];
        var mockCallback = jest.fn(function (color) {
            expect(color).toBe('#472b2d');
        });
        var _a = render(React.createElement(ColorPicker, { color: "#ff000b", onChange: mockCallback })), getAllByRole = _a.getAllByRole, getByText = _a.getByText, container = _a.container;
        fireEvent.focus(getAllByRole('textbox')[0], { target: { value: '#ff000b' } });
        var colorCanvas = container.getElementsByTagName('canvas')[1];
        // @ts-ignore
        jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementationOnce(function () {
            return {
                getImageData: function () {
                    return { data: mockImageData };
                }
            };
        });
        fireEvent.mouseUp(colorCanvas, { clientX: 130, clientY: 183 });
        fireEvent.click(getByText('OK'), {});
        expect(mockCallback).toBeCalledTimes(1);
    });
});
