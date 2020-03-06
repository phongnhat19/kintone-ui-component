/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
import { createEvent, fireEvent } from '@testing-library/dom';
describe('Unit test for Attachment onDragLeave event handler', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onDragLeave fire successfully', function () {
        var myAttachment = new Attachment();
        var container = myAttachment.render();
        var drag = container.getElementsByClassName('kuc-attachment-file');
        var newFile = new File([''], 'file.png', {
            type: 'image/png',
        });
        Object.defineProperty(newFile, 'kind', {
            value: 'file'
        });
        var dragEnterEvent = createEvent.dragEnter(drag[0]);
        Object.defineProperty(dragEnterEvent, 'dataTransfer', {
            value: {
                items: [newFile]
            },
        });
        var dragLeaveEvent = createEvent.dragLeave(drag[0]);
        try {
            fireEvent(drag[0], dragEnterEvent);
            fireEvent(drag[0], dragLeaveEvent);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
    // TODO: Remove unreachable branch line 263, 267 index.ts
});
