/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments',
    MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
    INVALID_ACTION: 'Behavior invalid',
    MISSING_NEW_ITEM_TABNAME: 'Missing tab name.'
};
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
    test('disableItem is called correctly', function () {
        var items = [{
                tabName: 'Tab1',
            }, {
                tabName: 'Tab2',
            }];
        var myTabs = new Tabs({ items: items });
        myTabs.disableItem('Tab2');
        var tabItems = myTabs.getItems();
        expect(tabItems).toBeTruthy();
        var disabledTab = tabItems[1];
        expect(disabledTab.isDisabled).toBeTruthy();
        // Verify tab name DOM
        var container = myTabs.render();
        var tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
        expect(tabNameDOMList.length).toEqual(2);
        var disabledTabNameDOM = tabNameDOMList[1];
        expect(disabledTabNameDOM.classList).toContain('kuc-tabs-disabled');
    });
    test('disableItem throw error when called without tabName', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            // @ts-ignore
            myTabs.disableItem();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
    test('disableItem throw error when disable selected tab', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            myTabs.disableItem('Tab1');
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ACTION);
        }
    });
});
