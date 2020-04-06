const { getPosition } = require('../js/utils/utils');

test('Should return full name of position', () => {
  const positionFullName = getPosition('D');

  expect(positionFullName).toBe('Defender');
});
