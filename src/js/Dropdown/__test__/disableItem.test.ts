import Dropdown from '../index';

describe('Unit test Dropdown disableItem', () => {
  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function disableItem run successfully with full props', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        },
      ]
    });
    const container = dropdown.render();
    dropdown.disableItem(expectedValues[1]);

    const itemsEl = container.querySelector('.kuc-list-outer')!.children;
    const itemEl = itemsEl[1];
    expect(itemEl.classList.contains('kuc-list-item-disable')).toBe(true);
  });

  test('throw error without value', () => {
    expect(() => {
      const dropdown = new Dropdown({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1],
            isDisabled: false
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2],
            isDisabled: true
          },
        ]
      });
      // @ts-ignore
      dropdown.disableItem(null);
    }).toThrowError();
  });
});