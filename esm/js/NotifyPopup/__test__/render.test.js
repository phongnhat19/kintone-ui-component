import NotifyPopup from '../index';
/* eslint no-unused-expressions: "off" */
describe('unit test NotifyPopup render', function () {
    test('Render successfully without option', function () {
        var notifyPopup = new NotifyPopup();
        var container = notifyPopup.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-danger'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container.getElementsByClassName('kuc-close-button')).toBeTruthy;
        expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(231, 76, 60)');
        expect(container).toBeVisible();
    });
    test('Render successfully with full option_success', function () {
        var notifyPopup = new NotifyPopup({
            text: 'testString',
            type: 'success',
            isVisible: false
        });
        var container = notifyPopup.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-success'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container.textContent).toBe('testString');
        expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(145, 195, 108)');
        expect(container).not.toBeVisible();
    });
    test('Render successfully with full option_info', function () {
        var notifyPopup = new NotifyPopup({
            text: 'testString',
            type: 'info',
            isVisible: true
        });
        var container = notifyPopup.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-info'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container.textContent).toBe('testString');
        expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(56, 151, 217)');
        expect(container).toBeVisible();
    });
    test('Render successfully with wrong option', function () {
        // @ts-ignore
        var notifyPopup = new NotifyPopup({
            text: 123,
            type: 'abc',
            isVisible: 'abc'
        });
        var container = notifyPopup.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-danger'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container.textContent).toBe('');
        expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(231, 76, 60)');
        expect(container).toBeVisible();
    });
});
