import IconButton from '../index';
describe('Unit test IconButton hide', function () {
    test('Function hide run successfully', function () {
        var iconButton = new IconButton({ isVisible: true });
        var container = iconButton.render();
        iconButton.hide();
        expect(container).not.toBeVisible();
    });
});
