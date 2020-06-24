/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
var message = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
describe('Unit test for Table setValue', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setValue is called successfully', function () {
        var tableValue = [
            { text: { value: 'first row' } },
            { text: { value: 'second row' } },
            { text: { value: 'third row' } }
        ];
        var myTable = new Table({
            columns: [
                {
                    header: 'Text',
                    cell: function () {
                        return createTableCell('text', 'text');
                    }
                },
            ]
        });
        myTable.render();
        myTable.setValue(tableValue);
        expect(myTable.getValue()).toBe(tableValue);
        // Verify table row DOM
        var container = myTable.render();
        var tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
        expect(tableBodyDOM.length).toEqual(1);
        var rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
        expect(rowDOMList.length).toEqual(3);
        for (var index = 0; index < rowDOMList.length; index++) {
            var rowDOM = rowDOMList[index];
            var textCellDOM = rowDOM.getElementsByTagName('input');
            expect(textCellDOM.length).toEqual(1);
            expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
            expect(textCellDOM[0].value).toEqual(tableValue[index].text.value);
        }
    });
    test('setValue throw error when called with invalid argument', function () {
        try {
            var tableValue = 1;
            var myTable = new Table();
            myTable.render();
            // @ts-ignore
            myTable.setValue(tableValue);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(message.INVALID_ARGUMENT);
        }
    });
});
