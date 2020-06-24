import NotifyPopup from '../index';
describe('Unit test NortifyPopup setType', function () {
    test('Function setType error run successfully', function () {
        var notifypopup = new NotifyPopup({ type: 'success' });
        var container = notifypopup.render();
        notifypopup.setType('error');
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-danger'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType success run successfully', function () {
        var notifypopup = new NotifyPopup({ type: 'error' });
        var container = notifypopup.render();
        notifypopup.setType('success');
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-success'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType info run successfully', function () {
        var notifypopup = new NotifyPopup({ type: 'success' });
        var container = notifypopup.render();
        notifypopup.setType('info');
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-info'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType empty run successfully', function () {
        var notifypopup = new NotifyPopup({ type: 'success' });
        var container = notifypopup.render();
        // @ts-ignore
        notifypopup.setType('');
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-danger'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType null run successfully', function () {
        var notifypopup = new NotifyPopup({ type: 'success' });
        var container = notifypopup.render();
        // @ts-ignore
        notifypopup.setType(null);
        expect(container.classList.length).toBe(2);
        expect(['kuc-notify', 'bg-danger'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
});
