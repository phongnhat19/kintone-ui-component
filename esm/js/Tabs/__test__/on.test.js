/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
import { getByText, fireEvent } from '@testing-library/dom';
// const messages = {
//   INVALID_ARGUMENT: 'Error: invalid function arguments',
//   MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
//   INVALID_ACTION: 'Behavior invalid',
//   MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
// };
describe('Unit test Tabs disableItem', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('on is called correctly', function () {
        var items = [{
                tabName: 'Tab1'
            }, {
                tabName: 'Tab2'
            }];
        var myTabs = new Tabs({ items: items });
        var container = myTabs.render();
        var onClickTabItem = jest.fn(function (tabIndex) {
            expect(tabIndex).toEqual(1);
        });
        myTabs.on('clickTabItem', onClickTabItem);
        expect(container).toBeTruthy();
        var tab2 = getByText(container, 'Tab2');
        fireEvent.click(tab2);
        expect(onClickTabItem).toHaveBeenCalled();
    });
    test('on is called correctly with event other than clickTabItem', function () {
        var items = [{
                tabName: 'Tab1'
            }];
        var myTabs = new Tabs({ items: items });
        var container = myTabs.render();
        var onClickHandler = jest.fn(function () {
            expect(true).toBeTruthy();
        });
        myTabs.on('click', onClickHandler);
        fireEvent.click(container);
        expect(onClickHandler).toHaveBeenCalled();
    });
});
