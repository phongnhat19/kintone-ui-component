/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
import { fireEvent } from '@testing-library/dom';
describe('Unit test for Table cellChange', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onCellChange is called successfully', function () {
        var myTable = new Table({
            data: [
                { text: { value: 'this is a text field' } },
                { text: { value: 'this is a text field 2' } }
            ],
            columns: [
                {
                    header: 'Text',
                    cell: function () {
                        return createTableCell('text', 'text');
                    }
                }
            ],
            onCellChange: function (event) {
                expect(event).toBeTruthy();
            }
        });
        var container = myTable.render();
        var inputToChange = container.getElementsByTagName('input');
        fireEvent.change(inputToChange[0]);
    });
});
