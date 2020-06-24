import Button from '../index';
describe('Unit test Button hide', function () {
    test('Function hide run successfully', function () {
        var button = new Button({ isVisible: true });
        var container = button.render();
        button.hide();
        expect(container).not.toBeVisible();
    });
});
