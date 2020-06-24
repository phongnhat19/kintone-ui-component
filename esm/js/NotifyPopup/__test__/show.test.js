import NotifyPopup from '../index';
describe('Unit test NotifyPopup show', function () {
    test('Function show run successfully', function () {
        var notifypopup = new NotifyPopup({ isVisible: false });
        var container = notifypopup.render();
        notifypopup.show();
        expect(container).toBeVisible();
    });
});
