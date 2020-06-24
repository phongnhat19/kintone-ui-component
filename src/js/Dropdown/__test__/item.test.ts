import Item from '../Item';

describe('Unit test Dropdown Item', () => {
  test('Render successfully with props', () => {
    const item = new Item({
      selected: true,
      item: {
        value: 'Lemon',
        label: 'lemon'
      },
      isDisabled: false,
    });
    const container = item.render();
    const itemLabelEl = container.children[1] as HTMLSpanElement;
    expect(['kuc-list-item', 'kuc-list-item-selected'].every(c => container.classList.contains(c))).toBe(true);
    expect(itemLabelEl.innerText).toBe('lemon');
  });
});