/* eslint-disable @typescript-eslint/no-empty-function */
import Attachment from '../index';
describe('Unit test Attachment on', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('on is called successfully', function () {
        var myAttachment = new Attachment();
        myAttachment.on('filesAdd', function () { });
        myAttachment.on('fileRemove', function () { });
    });
});
