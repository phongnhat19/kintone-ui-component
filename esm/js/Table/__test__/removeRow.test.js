/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
describe('Unit test for Table removeRow', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('removeRow button work normally', function () {
        var defaultRowData = {
            text: {
                value: 'default text field value'
            }
        };
        var handleRowRemove = function (_a) {
            var data = _a.data, rowIndex = _a.rowIndex;
            expect(data.length).toEqual(1);
            expect(rowIndex).toEqual(0);
        };
        var myTable = new Table({
            actionButtonsShown: true,
            data: [
                { text: { value: 'this is a text field' } },
                { text: { value: 'this is a text field 2' } }
            ],
            defaultRowData: defaultRowData,
            onRowRemove: handleRowRemove
        });
        var container = myTable.render();
        var actionButtons = container.getElementsByTagName('button');
        actionButtons[1].click();
        // TODO: Remove unreachable code line 89, 90, 91 index.ts
    });
});
