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
    test('enableItem is called correctly', function () {
        var items = [{
                tabName: 'Tab1'
            }, {
                tabName: 'Tab2',
                isDisabled: true
            }];
        var myTabs = new Tabs({ items: items });
        myTabs.enableItem('Tab2');
        var tabItems = myTabs.getItems();
        expect(tabItems).toBeTruthy();
        // @ts-ignore
        var enabledTab = tabItems[1];
        expect(enabledTab.isDisabled).toBeFalsy();
        // Verify tab name DOM
        var container = myTabs.render();
        var tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
        expect(tabNameDOMList.length).toEqual(2);
        var disabledTabNameDOM = tabNameDOMList[1];
        expect(disabledTabNameDOM.classList).not.toContain('kuc-tabs-disabled');
    });
    test('enableItem throws error when called withou tabName', function () {
        try {
            var items = [{
                    tabName: 'Tab1'
                }, {
                    tabName: 'Tab2'
                }];
            var myTabs = new Tabs({ items: items });
            // @ts-ignore
            myTabs.enableItem();
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
});
