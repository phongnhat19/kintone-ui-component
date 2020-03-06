import CheckBox from '../index';
describe('Unit test CheckBox getItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function getItem run successfully', function () {
        var checkBox = new CheckBox({
            items: [
                {
                    label: expectedLabels[0],
                    value: expectedValues[0],
                    isDisabled: false
                },
                {
                    label: expectedLabels[1],
                    value: expectedValues[1],
                    isDisabled: true
                }
            ]
        });
        expect(checkBox.getItem(0)).toEqual({
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
        });
        expect(checkBox.getItem(1)).toEqual({
            label: expectedLabels[1],
            value: expectedValues[1],
            isDisabled: true
        });
    });
    test('throw error with invalid index', function () {
        expect(function () {
            // @ts-ignore
            var checkBox = new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            // @ts-ignore
            checkBox.getItem('abc');
        }).toThrowError();
    });
    test('throw error with out of index', function () {
        expect(function () {
            // @ts-ignore
            var checkBox = new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            checkBox.getItem(10);
        }).toThrowError();
    });
    test('throw error without index', function () {
        expect(function () {
            var checkBox = new CheckBox({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            // @ts-ignore
            checkBox.getItem(null);
        }).toThrowError();
    });
});
