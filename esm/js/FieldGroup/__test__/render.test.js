/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';
describe('Unit test FieldGroup render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully without props', function () {
        var myFieldGroup = new FieldGroup({});
        var container = myFieldGroup.render();
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
        }
        else {
            expect(false);
        }
    });
    test('Init successfully with name props', function () {
        var NAME = 'FieldGroup name';
        var myFieldGroup = new FieldGroup({ name: NAME });
        expect(myFieldGroup.getName()).toEqual(NAME);
        // Verify name DOM
        var container = myFieldGroup.render();
        var fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
        expect(fgTab.length).toEqual(1);
        var fgTabLabel = fgTab[0].lastElementChild;
        expect(fgTabLabel).toBeInstanceOf(HTMLSpanElement);
        expect(fgTabLabel.innerText).toEqual(NAME);
    });
    test('Init successfully with content props', function () {
        var contentDiv = document.createElement('span');
        contentDiv.innerHTML = 'content';
        var myFieldGroup = new FieldGroup({ content: contentDiv });
        expect(myFieldGroup.getContent()).toBe(contentDiv);
        // Verify content DOM
        var container = myFieldGroup.render();
        var fgContent = container.getElementsByClassName('kuc-fieldgroup-contents');
        expect(fgContent.length).toEqual(1);
        expect(fgContent[0].firstElementChild).toBe(contentDiv);
    });
    test('Init successfully with toggle "expand"', function () {
        var myFieldGroup = new FieldGroup({ toggle: 'expand' });
        expect(myFieldGroup.getToggle()).toEqual('expand');
        // Verify toggle DOM
        var container = myFieldGroup.render();
        var fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
        expect(fgTab.length).toEqual(1);
        expect(fgTab[0].classList).toContain('expand');
        var fgTabArrow = fgTab[0].firstElementChild;
        expect(fgTabArrow.classList).toContain('down');
    });
});
