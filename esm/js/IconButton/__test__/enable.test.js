import IconButton from '../index';
describe('Unit test IconButton enable', function () {
    test('Function enable run successfully', function () {
        var iconButton = new IconButton({ isDisabled: true });
        var container = iconButton.render();
        iconButton.enable();
        expect(container).not.toBeDisabled();
    });
});
