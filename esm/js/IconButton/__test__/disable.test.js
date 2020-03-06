import IconButton from '../index';
describe('Unit test IconButton disable', function () {
    test('Function disable run successfully', function () {
        var iconButton = new IconButton({ isDisabled: false });
        var container = iconButton.render();
        iconButton.disable();
        expect(container).toBeDisabled();
    });
});
