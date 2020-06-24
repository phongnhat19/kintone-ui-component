/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
var messages = {
    INVALID_ARGUMENTS: 'Error: invalid function arguments'
};
// TODO: Remove unreachable else path line 481 (unnecessary return) index.ts
// TODO: Remove unreachable onChange path line 17,41 (unnecessary props) index.ts
describe('Unit test DateTime setValue', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('setValue type datetime DateTime', function () {
        var correctDateTime = '2020-05-10T04:13:00.000Z';
        var datetime = new DateTime({ value: new Date('October 13, 2019 11:13:00'), type: 'datetime' });
        datetime.render();
        datetime.setValue(new Date(correctDateTime));
        expect(datetime.getValue()).toStrictEqual(new Date(correctDateTime));
    });
    test('setValue type date DateTime', function () {
        var date = new Date();
        var datetime = new DateTime({ type: 'date' });
        datetime.render();
        datetime.setValue(date);
        expect(datetime.getValue()).toStrictEqual(date);
    });
    test('setValue type time DateTime', function () {
        var datetime = new DateTime({ type: 'time' });
        datetime.render();
        var date = new Date();
        datetime.setValue(date);
        expect(datetime.getValue()).toStrictEqual(date);
    });
    test('tToday is set when setValue is called with null', function () {
        var datetime = new DateTime({ value: undefined });
        datetime.render();
        var date = new Date();
        datetime.setValue(null);
        expect(datetime.getValue()).toStrictEqual(date);
    });
    test('throw error when setValue is called with undefined', function () {
        try {
            var datetime = new DateTime();
            datetime.render();
            datetime.setValue(undefined);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe(messages.INVALID_ARGUMENTS);
        }
    });
});
