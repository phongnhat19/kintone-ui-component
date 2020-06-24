/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import { createEvent, fireEvent } from '@testing-library/dom';
describe('Unit test for Attachment onDragOver event handler', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onDragOver fire successfully', function () {
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var newFile = new File([''], 'file.png', {
            type: 'image/png',
        });
        Object.defineProperty(newFile, 'kind', {
            value: 'file'
        });
        var dragOverEvent = createEvent.dragOver(drag[0]);
        Object.defineProperty(dragOverEvent, 'dataTransfer', {
            value: {
                items: [newFile]
            },
        });
        try {
            fireEvent(drag[0], dragOverEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    test('onDragOver fire successfully with no file', function () {
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var dragOverEvent = createEvent.dragOver(drag[0]);
        Object.defineProperty(dragOverEvent, 'dataTransfer', {
            value: {
                items: []
            },
        });
        try {
            fireEvent(drag[0], dragOverEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
