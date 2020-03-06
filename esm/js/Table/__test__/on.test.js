/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';
var message = {
    INVALID_EVENT: 'Invalid event, this function accept only '
};
var validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];
describe('Unit test for Table event binding', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('on function work normally', function () {
        var defaultRowData = {
            text: {
                value: 'default text field value'
            }
        };
        var handleRowAdd = function (_a) {
            var data = _a.data, rowIndex = _a.rowIndex;
            expect(data.length).toEqual(2);
            expect(data[rowIndex]).toStrictEqual(defaultRowData);
        };
        var myTable = new Table({
            actionButtonsShown: true,
            data: [
                { text: { value: 'this is a text field' } }
            ],
            defaultRowData: defaultRowData,
        });
        var container = myTable.render();
        myTable.on('rowAdd', handleRowAdd);
        var actionButtons = container.getElementsByTagName('button');
        actionButtons[0].click();
    });
    test('Throw error when called with invalid event name', function () {
        try {
            var myTable = new Table();
            myTable.render();
            myTable.on('123', function () { });
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(message.INVALID_EVENT + ' ' + validEventNames.join(','));
        }
    });
});
