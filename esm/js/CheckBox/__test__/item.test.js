import CheckBoxItem from '../Item';
describe('Unit test CheckBox Item', function () {
    test('Render successfully without props', function () {
        var item = new CheckBoxItem();
        var container = item.render();
        expect(container.className).toBe('kuc-input-checkbox-item');
    });
    test('getValue run successfully when value is not setted', function () {
        var item = new CheckBoxItem();
        expect(item.getValue()).toBe('');
    });
});
