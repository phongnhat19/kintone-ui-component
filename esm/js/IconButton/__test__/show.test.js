import IconButton from '../index';
describe('Unit test IconButton show', function () {
    test('Function show run successfully', function () {
        var iconButton = new IconButton({ isVisible: false });
        var container = iconButton.render();
        iconButton.show();
        expect(container).toBeVisible();
    });
});
