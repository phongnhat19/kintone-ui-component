/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, createEvent } from '@testing-library/react';
import Attachment from '../index';
import React from 'react';
describe('Unit test for Attachment onDragEnter event handler', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onDragEnter is fired successfully with dataTransfer.items[].kind', function () {
        var container = render(React.createElement(Attachment, null)).container;
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var newFile = new File([''], 'file.png', {
            type: 'image/png',
        });
        Object.defineProperty(newFile, 'kind', {
            value: 'file'
        });
        var dragEvent = createEvent.dragEnter(drag[0]);
        Object.defineProperty(dragEvent, 'dataTransfer', {
            value: {
                items: [newFile]
            },
        });
        try {
            fireEvent(drag[0], dragEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('onDragEnter is fired successfully with dataTransfer.types', function () {
        var container = render(React.createElement(Attachment, null)).container;
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var newFile = new File([''], 'file.png', {
            type: 'image/png',
        });
        Object.defineProperty(newFile, 'kind', {
            value: '123'
        });
        var dragEvent = createEvent.dragEnter(drag[0]);
        Object.defineProperty(dragEvent, 'dataTransfer', {
            value: {
                items: [newFile],
                types: ['files']
            },
        });
        try {
            fireEvent(drag[0], dragEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('onDragEnter will not fire without dataTransfer.items and dataTransfer.types', function () {
        var container = render(React.createElement(Attachment, null)).container;
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var dragEvent = createEvent.dragEnter(drag[0]);
        Object.defineProperty(dragEvent, 'dataTransfer', {
            value: {}
        });
        try {
            fireEvent(drag[0], dragEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('onDragEnter will not fire without valid types', function () {
        var container = render(React.createElement(Attachment, null)).container;
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var newFile = new File([''], 'file.png', {
            type: 'image/png',
        });
        Object.defineProperty(newFile, 'kind', {
            value: '123'
        });
        var dragEvent = createEvent.dragEnter(drag[0]);
        Object.defineProperty(dragEvent, 'dataTransfer', {
            value: {
                items: [newFile],
                types: ['123']
            },
        });
        try {
            fireEvent(drag[0], dragEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    // TODO: Remove unreachable branch line 112, 118 index.tsx
});
