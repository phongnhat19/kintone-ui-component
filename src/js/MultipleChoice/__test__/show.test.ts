import MultipleChoice from '../index';

describe('Unit test MultipleChoice show', () => {
  test('Function show run successfully', () => {

    const expectedLabels = ['Orange', 'Banana', 'Lemon'];
    const expectedValues = ['orange', 'banana', 'lemon'];

    const multipleChoice = new MultipleChoice({
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
      isVisible: false
    });
    const container = multipleChoice.render();
    multipleChoice.show();
    expect(container).toBeVisible();
  });
});