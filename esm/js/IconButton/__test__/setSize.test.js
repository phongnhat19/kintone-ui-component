import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';
describe('Unit test IconButton setSize', function () {
    test('Function setSize normal run successfully', function () {
        var iconButton = new IconButton({ size: 'small' });
        var container = iconButton.render();
        iconButton.setSize('normal');
        expect(container.className).toContain('normal');
    });
    test('Function setSize small run successfully', function () {
        var iconButton = new IconButton({ size: 'normal' });
        var container = iconButton.render();
        iconButton.setSize('small');
        expect(container.className).toContain('small');
    });
    test('Function setSize run successfully with empty', function () {
        var iconButton = new IconButton({});
        var container = iconButton.render();
        // @ts-ignore
        iconButton.setSize('');
        expect(container.className).toContain('normal');
    });
    test('Function setSize run successfully with null', function () {
        var iconButton = new IconButton({});
        var container = iconButton.render();
        // @ts-ignore
        iconButton.setSize(null);
        expect(container.className).toContain('normal');
    });
});
