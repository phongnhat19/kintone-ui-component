/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import Table from '../index';
import React from 'react';
describe('Unit test Table react', function () {
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
        var container = render(React.createElement(Table, null)).container;
        expect(container.firstElementChild).toBeTruthy();
        // @ts-ignore
        expect(container.firstElementChild.className).toBe('kuc-table');
    });
    test('Render successfully with props isVisible = false', function () {
        var container = render(React.createElement(Table, { isVisible: false })).container;
        expect(container.firstElementChild).toBeTruthy();
        // @ts-ignore
        expect(container.firstElementChild.className).toBe('kuc-table');
    });
    test('Render successfully with props actionButtonsShown = false', function () {
        var container = render(React.createElement(Table, { actionButtonsShown: false })).container;
        expect(container.firstElementChild).toBeTruthy();
        // @ts-ignore
        expect(container.firstElementChild.className).toBe('kuc-table');
    });
    test('Render successfully with full props', function () {
        var tableData = [
            { text: 'this is a text' },
            { number: 123 }
        ];
        var columns = [
            {
                header: 'Text',
                cell: function (_a) {
                    var rowIndex = _a.rowIndex;
                    return (React.createElement("div", null, tableData[rowIndex].text));
                }
            },
            {
                cell: function (_a) {
                    var rowIndex = _a.rowIndex;
                    return (React.createElement("div", null, tableData[rowIndex].number));
                }
            },
        ];
        // @ts-ignore
        var container = render(React.createElement(Table, { columns: columns, data: tableData })).container;
        expect(container.firstElementChild).toBeTruthy();
        var headers = container.getElementsByClassName('kuc-table-th');
        expect(headers.length).toEqual(1);
    });
    test('Event handler of Table', function () {
        var tableData = [
            {
                text: 'this is a text',
                number: 456
            },
            {
                number: 123
            }
        ];
        var defaultRowData = {
            text: 'this is a text',
            number: 123
        };
        var columns = [
            {
                header: 'Text',
                cell: function (_a) {
                    var rowIndex = _a.rowIndex, onCellChange = _a.onCellChange;
                    return (React.createElement("input", { value: tableData[rowIndex].text, "data-testid": "unit-test-input", onChange: function (e) {
                            onCellChange(e.target.value, tableData, rowIndex, 'text');
                        } }));
                }
            },
            {
                cell: function (_a) {
                    var rowIndex = _a.rowIndex;
                    return (React.createElement("div", null, tableData[rowIndex].number));
                }
            },
        ];
        // @ts-ignore
        var handleCellChange = function (_a) {
            var data = _a.data;
            // expect(false).toBeTruthy();
            expect(data).toBeTruthy();
        };
        // @ts-ignore
        var handleRowAdd = function (_a) {
            var data = _a.data;
            expect(data).toBeTruthy();
        };
        // @ts-ignore
        var handleRowRemove = function (_a) {
            var data = _a.data;
            expect(data).toBeTruthy();
        };
        var _a = render(React.createElement(Table
        // @ts-ignore
        , { 
            // @ts-ignore
            columns: columns, data: tableData, onRowAdd: handleRowAdd, onCellChange: handleCellChange, onRowRemove: handleRowRemove, defaultRowData: defaultRowData })), container = _a.container, getAllByTestId = _a.getAllByTestId;
        expect(container.firstElementChild).toBeTruthy();
        var actionButtons = container.getElementsByTagName('button');
        actionButtons[0].click();
        actionButtons[1].click();
        var unitTestInput = getAllByTestId('unit-test-input');
        fireEvent.change(unitTestInput[0], {
            target: {
                value: 'new value'
            }
        });
    });
    test('addRow without defaultRowData', function () {
        var tableData = [
            {
                text: 'this is a text',
                number: 456
            },
            {
                number: 123
            }
        ];
        var columns = [
            {
                header: 'Text',
                cell: function (_a) {
                    var rowIndex = _a.rowIndex, onCellChange = _a.onCellChange;
                    return (React.createElement("input", { value: tableData[rowIndex].text, "data-testid": "unit-test-input", onChange: function (e) {
                            onCellChange(e.target.value, tableData, rowIndex, 'text');
                        } }));
                },
                tdProps: function (cellProps) {
                    return {};
                }
            },
            {
                cell: function (_a) {
                    var rowIndex = _a.rowIndex;
                    return (React.createElement("div", null, tableData[rowIndex].number));
                }
            },
        ];
        // @ts-ignore
        var handleRowAdd = function (_a) {
            var data = _a.data;
            expect(data).toBeTruthy();
        };
        var container = render(React.createElement(Table
        // @ts-ignore
        , { 
            // @ts-ignore
            columns: columns, data: tableData, onRowAdd: handleRowAdd })).container;
        expect(container.firstElementChild).toBeTruthy();
        var actionButtons = container.getElementsByTagName('button');
        actionButtons[0].click();
        // TODO: Remove unreachable code line 218 index.tsx
        // TODO: Remove unreachable code line 181 index.tsx
        // TODO: Remove unreachable code line 165 index.tsx
    });
});
