/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
var messages = {
    INVALID_DATE: 'Error: invalid function arguments'
};
describe('Unit test DateTime render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('render successfully without props DateTime component', function () {
        var datetime = new DateTime();
        expect(datetime.render().className).toBe('date-time-container');
    });
    test('render successfully with full props DateTime type datetime', function () {
        var datetime = new DateTime({ value: new Date(), type: 'datetime', locale: 'en' });
        expect(datetime.render().className).toBe('date-time-container');
    });
    test('render successfully DateTime type date', function () {
        var datetime = new DateTime({ type: 'date', locale: 'zh' });
        var container = datetime.render();
        expect(container.className).toBe('date-time-container');
        expect(container.getElementsByClassName('date-container')[0]).toBeTruthy();
        expect(container.getElementsByClassName('time-container')[0]).toBeFalsy();
    });
    test('render successfully DateTime type time', function () {
        var datetime = new DateTime({ type: 'time' });
        var container = datetime.render();
        expect(container.className).toBe('date-time-container');
        expect(container.getElementsByClassName('date-container')[0]).toBeFalsy();
        expect(container.getElementsByClassName('time-container')[0]).toBeTruthy();
    });
    test('render successfully DateTime type time with isDisable', function () {
        var datetime = new DateTime({ type: 'time', isDisabled: true });
        var container = datetime.render();
        expect(container.className).toBe('date-time-container');
        expect(container.getElementsByClassName('date-container')[0]).toBeFalsy();
        expect(container.getElementsByClassName('time-container')[0]).toBeTruthy();
        expect(container.getElementsByClassName('kuc-input-text text-input time')[0]).toBeDisabled();
    });
    test('render throws error DateTime', function () {
        expect(function () {
            // @ts-ignore
            var datetime = new DateTime({ value: 'kintone', dateFormat: 'kintone', type: 'date' });
            datetime.render();
        }).toThrow(new Error(messages.INVALID_DATE));
    });
});
