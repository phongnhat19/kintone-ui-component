import CheckBox from '../index';
describe('Unit test CheckBox removeItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function removeItem run successfully', function () {
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
                },
                {
                    label: expectedLabels[2],
                    value: expectedValues[2],
                    isDisabled: true
                }
            ],
            value: [expectedValues[1]]
        });
        checkBox.removeItem(1);
        expect(checkBox.getItem(0)).toEqual({
            label: expectedLabels[0],
            value: expectedValues[0],
            isDisabled: false
        });
        expect(checkBox.getItem(1)).toEqual({
            label: expectedLabels[2],
            value: expectedValues[2],
            isDisabled: true
        });
        expect(checkBox.getValue()).toEqual([]);
    });
    test('throw error with invalid index', function () {
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
            checkBox.removeItem('abc');
        }).toThrowError();
    });
    test('throw error with out of index', function () {
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
            checkBox.removeItem(10);
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
            checkBox.removeItem(null);
        }).toThrowError();
    });
});
