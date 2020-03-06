import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';
describe('Unit test Button react', function () {
    test('Render successfully without props', function () {
        var container = render(React.createElement(Button, null)).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-btn normal');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props', function () {
        var container = render(React.createElement(Button, { text: "Submit", type: "submit", isDisabled: true, isVisible: false })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-btn submit');
            expect(container.firstElementChild).toBeDisabled();
            expect(container.firstElementChild).not.toBeVisible();
            expect(container.firstElementChild.textContent).toBe('Submit');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with wrong props', function () {
        var container = render(
        // @ts-ignore
        React.createElement(Button, { text: "Submit", type: "abc", isDisabled: "abc", isVisible: "abc" })).container;
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('kuc-btn normal');
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.textContent).toBe('Submit');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with onClick prop', function () {
        var onClickFlg = false;
        var handleClick = function (e) {
            if (e.target) {
                expect(e.target.value).toBe('on click');
                onClickFlg = true;
            }
            else {
                expect(false);
            }
        };
        var container = render(React.createElement(Button, { onClick: handleClick })).container;
        if (container.firstElementChild) {
            fireEvent.click(container.firstElementChild, {
                target: { value: 'on click' }
            });
            expect(onClickFlg).toBe(true);
        }
        else {
            expect(false);
        }
    });
});
