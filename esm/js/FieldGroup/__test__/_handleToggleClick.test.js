/* eslint-disable @typescript-eslint/no-empty-function */
import FieldGroup from '../index';
describe('Unit test FieldGroup _handleToggleClick', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('_handleToggleClick is called successfully', function () {
        var myFieldGroup = new FieldGroup({});
        // @ts-ignore
        myFieldGroup.fgTab.onclick();
        expect(myFieldGroup.getToggle()).toBe('expand');
        // @ts-ignore
        myFieldGroup.fgTab.onclick();
        expect(myFieldGroup.getToggle()).toBe('collapse');
    });
});
