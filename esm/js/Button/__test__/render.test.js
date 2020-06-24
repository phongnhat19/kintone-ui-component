import Button from '../index';
describe('Unit test Button render', function () {
    test('Render successfully without props', function () {
        var button = new Button();
        var container = button.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'normal'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).not.toBeDisabled();
        expect(container).toBeVisible();
        expect(container.textContent).toBe('');
    });
    test('Render successfully with full props', function () {
        // デフォルト値と異なる値をセットする。
        var button = new Button({
            text: 'Submit',
            type: 'submit',
            isDisabled: true,
            isVisible: false
        });
        var container = button.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'submit'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).toBeDisabled();
        expect(container).not.toBeVisible();
        expect(container.textContent).toBe('Submit');
    });
    test('Render successfully with wrong props', function () {
        // 不正な値を設定した場合はデフォルト値がセットされることを確認する
        // @ts-ignore
        var button = new Button({
            type: 'button',
            isDisabled: 'abc',
            isVisible: 'abc'
        });
        var container = button.render();
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'normal'].every(function (c) { return container.classList.contains(c); })).toBe(true);
        expect(container).not.toBeDisabled();
        expect(container).toBeVisible();
    });
});
