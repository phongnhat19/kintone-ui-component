/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FieldGroup from '../index';
describe('Unit test FieldGroup react', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully without props', function () {
        var container = render(React.createElement(FieldGroup, null)).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
        }
        else {
            expect(false);
        }
    });
    test('Render null when isVisible = false', function () {
        var container = render(React.createElement(FieldGroup, { isVisible: false })).container;
        if (container.firstElementChild) {
            expect(false);
        }
        else {
            expect(true);
        }
    });
    test('FieldGroup show successfully', function () {
        try {
            var _a = render(React.createElement(FieldGroup, null)), container = _a.container, getByRole = _a.getByRole;
            if (container.firstElementChild && container.firstElementChild.firstElementChild) {
                fireEvent.click(getByRole('button'));
                expect(getByRole('button').className).toContain('expand');
            }
            else {
                expect(false);
            }
        }
        catch (error) {
            expect(false);
        }
    });
    test('FieldGroup hide successfully', function () {
        try {
            var _a = render(React.createElement(FieldGroup, { toggle: "expand" })), container = _a.container, getByRole = _a.getByRole;
            if (container.firstElementChild && container.firstElementChild.firstElementChild) {
                fireEvent.click(getByRole('button'));
                expect(getByRole('button').className).toContain('collapse');
            }
            else {
                expect(false);
            }
        }
        catch (error) {
            expect(false);
        }
    });
    test('onToggle called successfully', function () {
        try {
            var _a = render(React.createElement(FieldGroup, { onToggle: function (toggleState) {
                    expect(toggleState).toEqual('expand');
                } })), container = _a.container, getByRole = _a.getByRole;
            if (container.firstElementChild && container.firstElementChild.firstElementChild) {
                fireEvent.click(getByRole('button'));
            }
            else {
                expect(false);
            }
        }
        catch (error) {
            expect(false);
        }
    });
    test('Render with children instead of content', function () {
        var container = render(React.createElement(FieldGroup, null,
            React.createElement("span", null, "123"))).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
        }
        else {
            expect(false);
        }
    });
});
