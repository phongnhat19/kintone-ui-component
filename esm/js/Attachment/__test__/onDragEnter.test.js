/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import { createEvent, fireEvent } from '@testing-library/dom';
describe('Unit test Attachment onDragEnter', function () {
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
        var myAttachment = new Attachment();
        var container = myAttachment.render();
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
            var dragActiveDOM = container.getElementsByClassName('kuc-attachment-drag-drop-active');
            expect(dragActiveDOM.length).toEqual(1);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('onDragEnter is fired successfully with dataTransfer.types', function () {
        var myAttachment = new Attachment();
        var container = myAttachment.render();
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
        var myAttachment = new Attachment();
        var container = myAttachment.render();
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
        var myAttachment = new Attachment();
        var container = myAttachment.render();
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
    // TODO: Remove unreachable branch line 248, 254 index.ts
});
