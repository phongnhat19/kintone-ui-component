import NotifyPopup from '../index';
describe('Unit test NortifyPopup setText', function () {
    test('Function setText run successfully', function () {
        var notifypopup = new NotifyPopup({});
        var container = notifypopup.render();
        notifypopup.setText('update');
        expect(container.textContent).toBe('update');
    });
    test('Function setText run successfully with empty text', function () {
        var notifypopup = new NotifyPopup({});
        var container = notifypopup.render();
        notifypopup.setText('');
        expect(container.textContent).toBe('');
    });
    test('Function setText run null with number', function () {
        var notifypopup = new NotifyPopup({});
        var container = notifypopup.render();
        // @ts-ignore
        notifypopup.setText(10);
        expect(container.textContent).toBe('');
    });
    test('Function setText run successfully with null', function () {
        var notifypopup = new NotifyPopup({});
        var container = notifypopup.render();
        // @ts-ignore
        notifypopup.setText(null);
        expect(container.textContent).toBe('');
    });
});
