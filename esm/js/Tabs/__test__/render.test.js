/* eslint-disable @typescript-eslint/no-empty-function */
import Tabs from '../index';
var messages = {
    INVALID_ARGUMENT: 'Error: invalid function arguments',
    MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
    INVALID_ACTION: 'Behavior invalid'
};
describe('Unit test Tabs render', function () {
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
        var myTabs = new Tabs({});
        var container = myTabs.render();
        expect(container.className).toContain('kuc-tabs-tabs');
    });
    test('Render successfully with full props', function () {
        var items = [{
                tabName: 'Tab1',
                tabContent: 'Tab1 content',
                isDisabled: false
            }, {
                tabName: 'Tab2',
                tabContent: 'Tab2 content',
                isDisabled: false
            }, {
                tabName: 'Tab3',
                tabContent: 'Tab3 content',
                isDisabled: true
            }];
        var myTabs = new Tabs({ items: items, value: 1 });
        var container = myTabs.render();
        expect(container.className).toContain('kuc-tabs-tabs');
    });
    test('Value is set to default when value props is undefined', function () {
        var items = [{
                tabName: 'Tab1',
            }, {
                tabName: 'Tab2',
            }];
        // @ts-ignore
        var myTabs = new Tabs({ items: items, value: undefined });
        var container = myTabs.render();
        expect(container.className).toContain('kuc-tabs-tabs');
        expect(myTabs.getValue()).toEqual(0);
        var tabNameDOMList = container.getElementsByClassName('kuc-tabs-container');
        expect(tabNameDOMList[0].classList).toContain('kuc-tabs-container-selection');
        expect(tabNameDOMList[1].classList).not.toContain('kuc-tabs-container-selection');
    });
    test('Throw error when missing tab name', function () {
        try {
            var items = [{
                    tabName: 'Tab1',
                }, {
                    tabName: 'Tab2',
                }, {}];
            // @ts-ignore
            var myTabs = new Tabs({ items: items });
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.MISSING_TAB_NAME.replace('{{index}}', '2'));
        }
    });
});
