import Button from '../index';
describe('Unit test Button disable', function () {
    test('Function disable run successfully', function () {
        var button = new Button({ isDisabled: false });
        var container = button.render();
        button.disable();
        expect(container).toBeDisabled();
    });
});
