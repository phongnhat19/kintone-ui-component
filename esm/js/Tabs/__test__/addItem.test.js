/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments',
    MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
    INVALID_ACTION: 'Behavior invalid',
    MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
};
describe('Unit test Tabs addItem', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('addItem is called correctly', function () {
        var newTabName = 'Tab3';
        var items = [{
                tabName: 'Tab1',
            }, {
                tabName: 'Tab2',
            }];
        var myTabs = new Tabs({ items: items });
        var newTab = {
            tabName: newTabName,
        };
        myTabs.addItem(newTab);
        var tabItems = myTabs.getItems();
        expect(tabItems).toBeTruthy();
        expect(tabItems.length).toEqual(3);
        // Verify tab name DOM
        var container = myTabs.render();
        var tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
        expect(tabNameDOMList.length).toEqual(3);
        var newTabDOM = tabNameDOMList[2];
        expect(newTabDOM.innerHTML).toEqual(newTabName);
    });
    test('addItem throw error when called with no param', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            // @ts-ignore
            myTabs.addItem();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
    test('addItem throw error when called with no tabName', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            // @ts-ignore
            myTabs.addItem({});
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.MISSING_NEW_ITEM_TABNAME);
        }
    });
});
