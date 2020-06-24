import RadioButton from '../index';

describe('Unit test RadioButton hide', () => {
  test('Function hide run successfully', () => {
    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];
    const radioButton = new RadioButton({
      name: 'fruit',
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
        }
      ],
      isVisible: true
    });
    const container = radioButton.render();
    radioButton.hide();
    expect(container).not.toBeVisible();
  });
});