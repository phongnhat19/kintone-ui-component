import Button from '../index';
describe('Unit test Button setType', function () {
    test('Function setType submit run successfully', function () {
        var button = new Button({ type: 'normal' });
        var container = button.render();
        button.setType('submit');
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'submit'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType normal run successfully', function () {
        var button = new Button({ type: 'submit' });
        var container = button.render();
        button.setType('normal');
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'normal'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType empty run successfully', function () {
        var button = new Button({ type: 'submit' });
        var container = button.render();
        // @ts-ignore
        button.setType('');
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'normal'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
    test('Function setType null run successfully', function () {
        var button = new Button({ type: 'submit' });
        var container = button.render();
        // @ts-ignore
        button.setType(null);
        expect(container.classList.length).toBe(2);
        expect(['kuc-btn', 'normal'].every(function (c) { return container.classList.contains(c); })).toBe(true);
    });
});
