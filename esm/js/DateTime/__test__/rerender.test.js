/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
describe('Unit test DateTime rerender', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('rerender dateTextInput dateFormat d/MM/YYY DateTime', function () {
        try {
            var datetime = new DateTime({ dateFormat: 'd/MM/YYY' });
            var container = datetime.render();
            datetime.rerender(['dateTextInput']);
            expect(container.getElementsByClassName('label-error')[0]).toHaveStyle('display: block;');
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    });
});
