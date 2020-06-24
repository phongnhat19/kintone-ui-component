/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
describe('Unit test for Table showActionButtons', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('hideActionButtons is called successfully', function () {
        var myTable = new Table({
            actionButtonsShown: true,
            data: [
                { text: { value: 'this is a text field' } }
            ],
            defaultRowData: { text: { value: 'default text field value' } },
            columns: [
                {
                    header: 'Text',
                    cell: function () {
                        return createTableCell('text', 'text');
                    }
                },
            ]
        });
        var container = myTable.render();
        myTable.hideActionButtons();
        var tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
        var rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
        // Verify action button
        var actionButtons = rowDOMList[0].getElementsByTagName('button');
        expect(actionButtons.length).toEqual(0);
    });
});
