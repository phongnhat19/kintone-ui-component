/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
describe('Unit test for Table addRow', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('addRow button work normally', function () {
        var defaultRowData = {
            text: {
                value: 'default text field value'
            }
        };
        var handleRowAdd = jest.fn(function (_a) {
            var data = _a.data, rowIndex = _a.rowIndex;
            expect(data.length).toEqual(2);
            expect(data[rowIndex]).toStrictEqual(defaultRowData);
            // Verify table row DOM
            var tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
            expect(tableBodyDOM.length).toEqual(1);
            var rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
            expect(rowDOMList.length).toEqual(2);
            // Verify row DOM
            var rowDOM = rowDOMList[1];
            var textCellDOM = rowDOM.getElementsByTagName('input');
            expect(textCellDOM.length).toEqual(1);
            expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
            expect(textCellDOM[0].value).toEqual(defaultRowData.text.value);
            // TODO: should render DOM before fire onRowAdd event (index.ts line 241)
        });
        var myTable = new Table({
            columns: [
                {
                    header: 'Text',
                    cell: function () {
                        return createTableCell('text', 'text');
                    }
                },
            ],
            actionButtonsShown: true,
            data: [
                { text: { value: 'this is a text field' } }
            ],
            defaultRowData: defaultRowData,
            onRowAdd: handleRowAdd
        });
        var container = myTable.render();
        var actionButtons = container.getElementsByTagName('button');
        actionButtons[0].click();
        expect(handleRowAdd.mock.calls.length).toBe(1);
    });
});
