import IconButton from '../index';
describe('Unit test IconButton setShape', function () {
    test('Function setShape square run successfully', function () {
        var iconButton = new IconButton({ shape: 'circle' });
        var container = iconButton.render();
        iconButton.setShape('square');
        expect(container.className).toContain('square');
    });
    test('Function setType circle run successfully', function () {
        var iconButton = new IconButton({ shape: 'square' });
        var container = iconButton.render();
        iconButton.setShape('circle');
        expect(container.className).toContain('circle');
    });
    test('Function setShape run successfully with empty', function () {
        var iconButton = new IconButton({ shape: 'square' });
        var container = iconButton.render();
        // @ts-ignore
        iconButton.setShape('');
        expect(container.className).toContain('circle');
    });
    test('Function setText run successfully with null', function () {
        var iconButton = new IconButton({ shape: 'square' });
        var container = iconButton.render();
        // @ts-ignore
        iconButton.setShape(null);
        expect(container.className).toContain('circle');
    });
});
