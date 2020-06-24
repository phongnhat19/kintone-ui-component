/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';
describe('Unit test FieldGroup setToggle', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setToggle is called successfully', function () {
        var myFieldGroup = new FieldGroup({ toggle: 'expand' });
        myFieldGroup.setToggle('collapse');
        expect(myFieldGroup.getToggle()).toBe('collapse');
        // Verify toggle DOM
        var container = myFieldGroup.render();
        var fgTab = container.getElementsByClassName('kuc-fieldgroup-label');
        expect(fgTab.length).toEqual(1);
        expect(fgTab[0].classList).toContain('collapse');
        var fgTabArrow = fgTab[0].firstElementChild;
        expect(fgTabArrow.classList).toContain('right');
    });
});
