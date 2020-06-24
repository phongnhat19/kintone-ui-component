import Button from '../index';
describe('Unit test Button show', function () {
    test('Function show run successfully', function () {
        var button = new Button({ isVisible: false });
        var container = button.render();
        button.show();
        expect(container).toBeVisible();
    });
});
