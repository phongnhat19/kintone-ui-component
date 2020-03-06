/* eslint-disable @typescript-eslint/no-empty-function */
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
import Dialog from '../index';
describe('Unit test Dialog render', function () {
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
        var myDialog = new Dialog({});
        var container = myDialog.render();
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
        // Verify close button DOM
        var closeButtonDOM = container.getElementsByClassName('kuc-dialog-close-button');
        expect(closeButtonDOM.length).toEqual(1);
        expect(closeButtonDOM[0]).toBeInstanceOf(HTMLSpanElement);
    });
    test('Render successfully with full props', function () {
        var DIALOG_HEADER = 'Dialog header';
        var DIALOG_CONTENT = 'This is content';
        var DIALOG_FOOTER = 'Footer';
        var myDialog = new Dialog({
            header: DIALOG_HEADER,
            content: DIALOG_CONTENT,
            footer: DIALOG_FOOTER,
            isVisible: true,
            showCloseButton: true
        });
        var container = myDialog.render();
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
        // Verify header DOM
        var headerDOM = container.getElementsByClassName('kuc-dialog-header');
        expect(headerDOM.length).toEqual(1);
        expect(headerDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(headerDOM[0].innerHTML).toContain(DIALOG_HEADER);
        // Verify close button DOM
        var closeButtonDOM = container.getElementsByClassName('kuc-dialog-close-button');
        expect(closeButtonDOM.length).toEqual(1);
        expect(closeButtonDOM[0]).toBeInstanceOf(HTMLSpanElement);
        // Verify content DOM
        var contentDOM = container.getElementsByClassName('kuc-dialog-body');
        expect(contentDOM.length).toEqual(1);
        expect(contentDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(contentDOM[0].innerHTML).toEqual(DIALOG_CONTENT);
        // Verify footer DOM
        var footerDOM = container.getElementsByClassName('kuc-dialog-footer');
        expect(footerDOM.length).toEqual(1);
        expect(footerDOM[0]).toBeInstanceOf(HTMLDivElement);
        expect(footerDOM[0].innerHTML).toEqual(DIALOG_FOOTER);
    });
    test('Render hidden Dialog successfully', function () {
        var myDialog = new Dialog({ isVisible: false });
        var container = myDialog.render();
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
        }
        else {
            expect(false);
        }
    });
    test('Render successfully when showCloseButton is false', function () {
        var myDialog = new Dialog({ showCloseButton: false });
        var container = myDialog.render();
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    });
    // WILL BE REMOVED
    test('Render successfully when showCloseButton is true', function () {
        var myDialog = new Dialog({ showCloseButton: true });
        var container = myDialog.render();
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container');
    });
    test('Init failed with invalid header props', function () {
        try {
            // @ts-ignore
            var myDialog = new Dialog({
                header: 1,
            });
            if (myDialog) {
                expect(false);
            }
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Init failed with invalid content props', function () {
        try {
            // @ts-ignore
            var myDialog = new Dialog({
                content: 1,
            });
            if (myDialog) {
                expect(false);
            }
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Init failed with invalid footer props', function () {
        try {
            // @ts-ignore
            var myDialog = new Dialog({
                footer: 1,
            });
            if (myDialog) {
                expect(false);
            }
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Init failed with invalid showCloseButton props', function () {
        try {
            // @ts-ignore
            var myDialog = new Dialog({
                showCloseButton: 'abc',
            });
            if (myDialog) {
                expect(false);
            }
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Init failed with invalid isVisible props', function () {
        try {
            // @ts-ignore
            var myDialog = new Dialog({
                isVisible: 'abc',
            });
            if (myDialog) {
                expect(false);
            }
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENT);
        }
    });
    test('Close button function normally', function () {
        var myDialog = new Dialog({ showCloseButton: true });
        var container = myDialog.render();
        // @ts-ignore
        myDialog._closeButton._onClick();
        expect(container.firstElementChild).toBeTruthy();
        expect(container.firstElementChild.className).toContain('kuc-dialog-container hidden');
    });
});
