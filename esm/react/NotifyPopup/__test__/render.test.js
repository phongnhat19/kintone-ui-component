import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotifyPopup from '../index';
describe('Unit test NotifyPopup react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'log');
        // @ts-ignore
        console.log.mockImplementation(function (value) {
            return value;
        });
    });
    afterEach(function () {
        // @ts-ignore
        console.log.mockRestore();
    });
    test('Render successfully without props', function () {
        var container = render(React.createElement(NotifyPopup, null)).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props_success', function () {
        var container = render(React.createElement(NotifyPopup, { text: "testString", type: "success", isVisible: true })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-notify bg-success');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('testString');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props_info', function () {
        var container = render(React.createElement(NotifyPopup, { text: "testString", type: "info", isVisible: true })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-notify bg-info');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('testString');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with be not Visible', function () {
        var container = render(React.createElement(NotifyPopup, { text: "testString", type: "info", isVisible: false })).container;
        expect(container.firstElementChild).toBeFalsy();
    });
    test('Render successfully with onClick event', function () {
        var clickBL = false;
        var handleClick = function (e) {
            if (e.target) {
                expect(clickBL).toBe(false);
                clickBL = true;
            }
            else {
                expect(false);
            }
        };
        var container = render(React.createElement(NotifyPopup, { text: "testString", onClick: handleClick })).container;
        if (container.firstElementChild) {
            fireEvent.click(container.firstElementChild.children[0]);
            expect(clickBL).toBe(true);
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with onClose event', function () {
        var clickBL = false;
        var handleClick = function (e) {
            if (e.target) {
                expect(clickBL).toBe(false);
                clickBL = true;
            }
            else {
                expect(false);
            }
        };
        var container = render(React.createElement(NotifyPopup, { text: "testString", onClose: handleClick })).container;
        if (container.firstElementChild) {
            fireEvent.click(container.firstElementChild.children[1].children[0]);
            expect(clickBL).toBe(true);
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with wrong props', function () {
        // @ts-ignore
        var container = render(React.createElement(NotifyPopup, { text: "testString", type: "abc", isVisible: "abc" })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-notify bg-danger');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('testString');
        }
        else {
            expect(false);
        }
    });
});
