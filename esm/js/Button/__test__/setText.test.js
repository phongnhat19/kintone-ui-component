import Button from '../index';
describe('Unit test Button setText', function () {
    test('Function setText run successfully', function () {
        var button = new Button({});
        var container = button.render();
        button.setText('update');
        expect(container.textContent).toBe('update');
    });
    test('Function setText run successfully with empty text', function () {
        var button = new Button({});
        var container = button.render();
        button.setText('');
        expect(container.textContent).toBe('');
    });
    test('Function setText run successfully with number', function () {
        var button = new Button();
        var container = button.render();
        // @ts-ignore
        button.setText(10);
        expect(container.textContent).toBe('10');
    });
    test('Function setText run successfully with null', function () {
        var button = new Button();
        var container = button.render();
        // @ts-ignore
        button.setText(null);
        // setTextの更新方法がinnerHTMLになっている。要修正。
        expect(container.textContent).toBe('');
    });
});
