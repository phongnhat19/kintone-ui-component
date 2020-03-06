/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
import createTableCell from '../TableCellFactory';
var message = {
    INVALID_ARGUMENT: 'Error: invalid function arguments'
};
describe('Unit test for Table render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('Render successfully without props', function () {
        var myTable = new Table();
        var container = myTable.render();
        expect(container).toBeTruthy();
        // @ts-ignore
        expect(container.className).toBe('kuc-table');
    });
    test('Render successfully with props isVisible = false', function () {
        var myTable = new Table({ isVisible: false });
        var container = myTable.render();
        expect(container).toBeTruthy();
        // @ts-ignore
        expect(container.className).toBe('kuc-table');
        expect(container.style.display).toEqual('none');
    });
    test('Render successfully with props actionButtonsShown = false', function () {
        var myTable = new Table({ actionButtonsShown: false });
        var container = myTable.render();
        expect(container).toBeTruthy();
        expect(container.className).toBe('kuc-table');
    });
    test('Render successfully with full props', function () {
        var tableValue = [
            { text: { value: 'this is a text field 1' } },
            { text: { value: 'this is a text field 2' } }
        ];
        var myTable = new Table({
            data: tableValue,
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
        expect(container).toBeTruthy();
        expect(container.className).toBe('kuc-table');
        // Verify table row DOM
        var tableBodyDOM = container.getElementsByClassName('kuc-table-tbody');
        expect(tableBodyDOM.length).toEqual(1);
        var rowDOMList = tableBodyDOM[0].getElementsByClassName('kuc-table-tr');
        expect(rowDOMList.length).toEqual(2);
        for (var index = 0; index < rowDOMList.length; index++) {
            // Verify row DOM
            var rowDOM = rowDOMList[index];
            var textCellDOM = rowDOM.getElementsByTagName('input');
            expect(textCellDOM.length).toEqual(1);
            expect(textCellDOM[0]).toBeInstanceOf(HTMLInputElement);
            expect(textCellDOM[0].value).toEqual(tableValue[index].text.value);
            // Verify action button
            var actionButtons = rowDOM.getElementsByTagName('button');
            expect(actionButtons.length).toEqual(2);
            expect(actionButtons[0].className).toEqual('kuc-icon-btn small  blue circle');
            expect(actionButtons[1].className).toEqual('kuc-icon-btn small hover-danger gray circle');
        }
    });
    test('Throw error when validate props fail', function () {
        try {
            // @ts-ignore
            var myTable = new Table({
                data: 1
            });
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(message.INVALID_ARGUMENT);
        }
    });
});
