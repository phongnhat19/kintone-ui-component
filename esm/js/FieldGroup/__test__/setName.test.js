/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';
describe('Unit test FieldGroup setName', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setName is called successfully', function () {
        var myFieldGroup = new FieldGroup({ name: 'name' });
        var NEW_NAME = 'new name';
        myFieldGroup.setName(NEW_NAME);
        expect(myFieldGroup.getName()).toBe(NEW_NAME);
        // Verify name DOM
        var container = myFieldGroup.render();
        var fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
        expect(fgTab.length).toEqual(1);
        var fgTabLabel = fgTab[0].lastElementChild;
        expect(fgTabLabel).toBeInstanceOf(HTMLSpanElement);
        expect(fgTabLabel.innerText).toEqual(NEW_NAME);
    });
});
