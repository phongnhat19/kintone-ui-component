/* eslint-disable @typescript-eslint/no-empty-function */
import TableCell from '../TableCell';
describe('Unit test for TableCell', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('TableCell can be initialzed without props', function () {
        expect(function () {
            new TableCell();
        }).not.toThrow();
    });
    test('TableCell init function can be called without provided init function', function () {
        expect(function () {
            var myCell = new TableCell();
            myCell.init();
        }).not.toThrow();
    });
});
