/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
describe('Unit test DateTime disable', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('disable & enable successfully DateTime', function () {
        var datetime = new DateTime();
        var container = datetime.render();
        datetime.disable();
        expect(container.getElementsByClassName('kuc-input-text text-input')[0]).toBeDisabled();
        datetime.enable();
        expect(container.getElementsByClassName('kuc-input-text text-input')[0]).not.toBeDisabled();
    });
});
