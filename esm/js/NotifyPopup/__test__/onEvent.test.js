import NotifyPopup from '../index';
import { fireEvent, getByText, getByRole } from '@testing-library/dom';
describe('Unit test NotifyPopup onEvent', function () {
    test('Function onClick event run successfully', function () {
        var notifypopup = new NotifyPopup({ text: 'NotifyPopup' });
        var container = notifypopup.render();
        notifypopup.on('click', function (e) {
            if (e.target) {
                notifypopup.setText('on Click');
            }
        });
        fireEvent.click(getByText(container, 'NotifyPopup'));
        expect(container.textContent).toBe('on Click');
    });
    test('Function onClose event run successfully', function () {
        var notifypopup = new NotifyPopup({ text: 'NotifyPopup' });
        var container = notifypopup.render();
        notifypopup.on('close', function (e) {
            if (e.target) {
                notifypopup.setText('on close');
            }
        });
        fireEvent.click(getByRole(container, 'button'));
        expect(container.textContent).toBe('on close');
    });
    test('Function onChange event will not run', function () {
        var notifypopup = new NotifyPopup({ text: 'NotifyPopup' });
        var container = notifypopup.render();
        // @ts-ignore
        notifypopup.on('change', function (e) {
            if (e.target) {
                notifypopup.setText('on change');
            }
        });
        fireEvent.click(getByText(container, 'NotifyPopup'));
        expect(container.textContent).toBe('NotifyPopup');
    });
});
