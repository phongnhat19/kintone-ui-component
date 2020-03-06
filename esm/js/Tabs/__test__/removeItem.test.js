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
    test('removeItem is called correctly', function () {
        var items = [{
                tabName: 'Tab1',
            }, {
                tabName: 'Tab2',
            }];
        var myTabs = new Tabs({ items: items });
        myTabs.removeItem(1);
        var tabItems = myTabs.getItems();
        expect(tabItems).toBeTruthy();
        expect(tabItems.length).toEqual(1);
        // Verify tab name DOM
        var container = myTabs.render();
        var tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
        expect(tabNameDOMList.length).toEqual(1);
    });
    test('removeItem throw error when index is not a number', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            // @ts-ignore
            myTabs.removeItem('a');
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
    test('removeItem throw error when index is negative', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }];
            var myTabs = new Tabs({ items: items });
            myTabs.removeItem(-1);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(messages.INVALID_ARGUMENT);
        }
    });
});
