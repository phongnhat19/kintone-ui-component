/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';
describe('Unit test FieldGroup setContent', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setContent is called successfully', function () {
        var contentDiv = document.createElement('span');
        contentDiv.innerHTML = 'content';
        var myFieldGroup = new FieldGroup({ content: contentDiv });
        var newContentDiv = document.createElement('span');
        newContentDiv.innerHTML = 'content';
        myFieldGroup.setContent(newContentDiv);
        expect(myFieldGroup.getContent()).toBe(newContentDiv);
        // Verify content DOM
        var container = myFieldGroup.render();
        var fgContent = container.getElementsByClassName('kuc-fieldgroup-contents');
        expect(fgContent.length).toEqual(1);
        expect(fgContent[0].firstElementChild).toBe(newContentDiv);
    });
});
