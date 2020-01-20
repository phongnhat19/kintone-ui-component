import NotifyPopup from '../index';
import {fireEvent, getByText, getByRole} from '@testing-library/react';

describe('Unit test NotifyPopup onEvent', () => {
  test('Function onClick event run successfully', () => {
    const notifypopup = new NotifyPopup({text: 'NotifyPopup'});
    const container = notifypopup.render();
    notifypopup.on('click', (e: any) => {
      if (e.target) {
        notifypopup.setText('on Click');
      }
    });
    fireEvent.click(getByText(container, 'NotifyPopup'));
    expect(container.textContent).toBe('on Click');
  });

  test('Function onClose event run successfully', () => {
    const notifypopup = new NotifyPopup({text: 'NotifyPopup'});
    const container = notifypopup.render();
    notifypopup.on('close', (e: any) => {
      if (e.target) {
        notifypopup.setText('on close');
      }
    });
    fireEvent.click(getByRole(container, 'button'));
    expect(container.textContent).toBe('on close');
  });

  test('Function onChange event will not run', () => {
    const notifypopup = new NotifyPopup({text: 'NotifyPopup'});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.on('change', (e: any) => {
      if (e.target) {
        notifypopup.setText('on change');
      }
    });
    fireEvent.click(getByText(container, 'NotifyPopup'));
    expect(container.textContent).toBe('NotifyPopup');
  });
});