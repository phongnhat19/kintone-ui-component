import NotifyPopup from '../index';
describe('Unit test NotifyPopup hide', function () {
    test('Function hide run successfully', function () {
        var notifypopup = new NotifyPopup({ isVisible: true });
        var container = notifypopup.render();
        notifypopup.hide();
        expect(container).not.toBeVisible();
    });
});
