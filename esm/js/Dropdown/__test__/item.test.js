import Item from '../Item';
describe('Unit test Dropdown Item', function () {
    test('Render successfully with props', function () {
        var item = new Item({
            selected: true,
            item: {
                value: 'Lemon',
                label: 'lemon'
            },
            isDisabled: false,
        });
        var container = item.render();
        var itemLabelEl = container.children[1];
        expect(['kuc-list-item', 'kuc-list-item-selected'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(itemLabelEl.innerText).toBe('lemon');
    });
});
