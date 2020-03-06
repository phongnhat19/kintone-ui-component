import Item from '../Item';
describe('Unit test RadioButton Item', function () {
    test('Render successfully without props', function () {
        var item = new Item({
            selected: true,
            item: {
                value: 'Lemon',
                label: 'lemon',
                isDisabled: false
            },
            isDisabled: false,
        });
        var container = item.render();
        var itemInputlEl = container.children[0];
        var itemLabelEl = container.children[1];
        expect(itemInputlEl.checked).toBe(true);
        expect(itemLabelEl.innerText).toBe('lemon');
        expect(itemInputlEl).not.toBeDisabled();
    });
});
