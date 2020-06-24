import Button from '../index';
describe('Unit test Button enable', function () {
    test('Function enable run successfully', function () {
        var button = new Button({ isDisabled: false });
        var container = button.render();
        button.enable();
        expect(container).not.toBeDisabled();
    });
});
