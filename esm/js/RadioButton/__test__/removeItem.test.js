import RadioButton from '../index';
describe('Unit test RadioButton removeItem', function () {
    var expectedLabels = ['Orange', 'Banana', 'Lemon'];
    var expectedValues = ['orange', 'banana', 'lemon'];
    test('Function removeItem run successfully', function () {
        var radioButton = new RadioButton({
            name: 'fruit',
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
            value: expectedValues[1]
        });
        var container = radioButton.render();
        radioButton.removeItem(1);
        var itemsEl = container.getElementsByClassName('kuc-input-radio');
        if (!container.children || itemsEl.length !== 2) {
            expect(false);
        }
        expect(radioButton.getItems()).toMatchObject([{
                label: expectedLabels[0],
                value: expectedValues[0],
                isDisabled: false
            },
            {
                label: expectedLabels[2],
                value: expectedValues[2],
                isDisabled: true
            }
        ]);
        expect(radioButton.getValue()).toEqual(null);
    });
    test('throw error with invalid index', function () {
        expect(function () {
            // @ts-ignore
            var radioButton = new RadioButton({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            // @ts-ignore
            radioButton.removeItem('abc');
        }).toThrowError();
    });
    test('throw error with out of index', function () {
        expect(function () {
            // @ts-ignore
            var radioButton = new RadioButton({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            radioButton.removeItem(10);
        }).toThrowError();
    });
    test('throw error without index', function () {
        expect(function () {
            var radioButton = new RadioButton({
                name: 'fruit',
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0],
                        isDisabled: false
                    }
                ]
            });
            // @ts-ignore
            radioButton.removeItem(null);
        }).toThrowError();
    });
});
