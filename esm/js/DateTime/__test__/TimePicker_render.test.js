/* eslint-disable @typescript-eslint/no-empty-function */
import TimePicker from '../components/TimePicker';
import { fireEvent } from '@testing-library/dom';
describe('Unit test Calendar render', function () {
    beforeEach(function () {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(function () { });
    });
    afterEach(function () {
        // @ts-ignore
        console.error.mockRestore();
    });
    test('onClick time item of TimePicker', function () {
        var mockFn = jest.fn(function (date) {
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(30);
        });
        var timePicker = new TimePicker({
            isVisible: true,
            isDisabled: false,
            onTimeClick: mockFn
        });
        timePicker.render();
        var span = timePicker.render().getElementsByClassName('kuc-time-list-item')[1];
        fireEvent.click(span);
        expect(mockFn).toBeCalledTimes(1);
    });
    test('render TimePicker', function () {
        var timePicker = new TimePicker({ isVisible: true, isDisabled: true });
        var container = timePicker.render();
        expect(container.style.display).toBe('block');
        expect(container.className).toBe('time-picker-container');
        var listTimeEl = container.getElementsByClassName('kuc-time-list-item');
        expect(listTimeEl.length).toBe(48);
        expect(listTimeEl[0].textContent).toBe('00:00');
        expect(listTimeEl[47].textContent).toBe('23:30');
    });
});
