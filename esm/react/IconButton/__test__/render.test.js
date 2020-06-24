import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconButton from '../index';
describe('Unit test IconButton react render', function () {
    test('Render successfully without props', function () {
        var container = render(React.createElement(IconButton, null)).container;
        if (container.firstElementChild) {
            expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(function (c) { return container.firstElementChild.classList.contains(c); })).toBeTruthy();
            expect(container.firstElementChild.classList.length).toBe(4);
            expect(container.firstElementChild).not.toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.firstElementChild.firstElementChild.getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with full props', function () {
        var container = render(React.createElement(IconButton, { color: "green", type: "remove", size: "small", shape: "square", isDisabled: true, isVisible: false })).container;
        if (container.firstElementChild) {
            expect(['kuc-icon-btn', 'small', 'green', 'square'].every(function (c) { return container.firstElementChild.classList.contains(c); })).toBeTruthy();
            expect(container.firstElementChild.classList.length).toBe(4);
            expect(container.firstElementChild).toBeDisabled();
            expect(container.firstElementChild).toBeVisible();
            expect(container.firstElementChild.firstElementChild.firstElementChild.getAttribute('d')).toBe('M19,13H5V11H19V13Z');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully with red color', function () {
        var container = render(React.createElement(IconButton, { color: "red" })).container;
        expect(container.firstElementChild.classList.contains('red')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('rgb(228, 66, 52)');
    });
    test('Render successfully with green color', function () {
        var container = render(React.createElement(IconButton, { color: "green" })).container;
        expect(container.firstElementChild.classList.contains('green')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('rgb(134, 187, 97)');
    });
    test('Render successfully with blue color', function () {
        var container = render(React.createElement(IconButton, { color: "blue" })).container;
        expect(container.firstElementChild.classList.contains('blue')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('rgb(45, 141, 214)');
    });
    test('Render successfully with gray color', function () {
        var container = render(React.createElement(IconButton, { color: "gray" })).container;
        expect(container.firstElementChild.classList.contains('gray')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('rgb(238, 238, 238)');
    });
    test('Render successfully with transparent', function () {
        var container = render(React.createElement(IconButton, { color: "transparent" })).container;
        expect(container.firstElementChild.classList.contains('transparent')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('transparent');
    });
    test('Render successfully with invaid color', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { color: "abc" })).container;
        expect(container.firstElementChild.classList.contains('gray')).toBeTruthy();
        expect(window.getComputedStyle(container.firstElementChild).backgroundColor).toBe('rgb(238, 238, 238)');
    });
    test('Render successfully with circle shape', function () {
        var container = render(React.createElement(IconButton, { shape: "circle" })).container;
        expect(container.firstElementChild.classList.contains('circle')).toBeTruthy();
    });
    test('Render successfully with square shape', function () {
        var container = render(React.createElement(IconButton, { shape: "square" })).container;
        expect(container.firstElementChild.classList.contains('square')).toBeTruthy();
    });
    test('Render successfully with invaid shape', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { shape: "abc" })).container;
        expect(container.firstElementChild.classList.contains('circle')).toBeTruthy();
    });
    test('Render successfully with normal size', function () {
        var container = render(React.createElement(IconButton, { size: "normal" })).container;
        expect(container.firstElementChild.classList.contains('normal')).toBeTruthy();
    });
    test('Render successfully with small size', function () {
        var container = render(React.createElement(IconButton, { size: "small" })).container;
        expect(container.firstElementChild.classList.contains('small')).toBeTruthy();
    });
    test('Render successfully with invaid size', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { size: "abc" })).container;
        expect(container.firstElementChild.classList.contains('normal')).toBeTruthy();
    });
    test('Render successfully with insert type', function () {
        var container = render(React.createElement(IconButton, { type: "insert" })).container;
        expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    });
    test('Render successfully with remove type', function () {
        var container = render(React.createElement(IconButton, { type: "remove" })).container;
        expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H5V11H19V13Z');
    });
    test('Render successfully with close type', function () {
        var container = render(React.createElement(IconButton, { type: "close" })).container;
        expect(container.children[0].children[0].children[0]
            .getAttribute('d')).toBe('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
    });
    test('Render successfully with file type', function () {
        var container = render(React.createElement(IconButton, { type: "file" })).container;
        expect(container.children[0].children[0].children[0]
            .getAttribute('d')).toBe('M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6Z');
    });
    test('Render successfully with right type', function () {
        var container = render(React.createElement(IconButton, { type: "right" })).container;
        expect(container.children[0].children[0].children[0]
            .getAttribute('d')).toBe('M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z');
    });
    test('Render successfully with left type', function () {
        var container = render(React.createElement(IconButton, { type: "left" })).container;
        expect(container.children[0].children[0].children[0]
            .getAttribute('d')).toBe('M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z');
    });
    test('Render successfully with invaid type', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { type: "abc" })).container;
        expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    });
    test('Render successfully with disabled', function () {
        var container = render(React.createElement(IconButton, { isDisabled: true })).container;
        expect(container.firstElementChild).toBeDisabled();
    });
    test('Render successfully with enabled', function () {
        var container = render(React.createElement(IconButton, { isDisabled: false })).container;
        expect(container.firstElementChild).not.toBeDisabled();
    });
    test('Render successfully with invaid disabled', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { isDisabled: "abc" })).container;
        expect(container.firstElementChild).not.toBeDisabled();
    });
    test('Render successfully with show', function () {
        var container = render(React.createElement(IconButton, { isVisible: true })).container;
        expect(container.firstElementChild).toBeVisible();
    });
    test('Render successfully with hide', function () {
        var container = render(React.createElement(IconButton, { isVisible: false })).container;
        expect(container.firstElementChild).toBe(null);
    });
    test('Render successfully with invaid visible', function () {
        var container = render(
        // @ts-ignore
        React.createElement(IconButton, { isVisible: "abc" })).container;
        expect(container.firstElementChild).toBeVisible();
    });
    test('Render successfully with click event', function () {
        var handleClick = function (e) {
            expect(e.type).toBe('click');
        };
        var container = render(React.createElement(IconButton, { onClick: handleClick })).container;
        if (container.firstElementChild) {
            fireEvent.click(container.firstElementChild);
        }
        else {
            expect(false);
        }
    });
});
