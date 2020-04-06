const { getPosition } = require('../js/utils/utils');

test('Should return full name of position', () => {
  const positionD = getPosition('D');
  expect(positionD).toBe('Defender');
  const positionM = getPosition('M');
  expect(positionM).toBe('Midfielder');
  const positionF = getPosition('F');
  expect(positionF).toBe('Fullback');
});

test('Should output Position not found', () => {
  const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  const positionResult = getPosition(randomString);
  expect(positionResult).toBe('Position not found');
});
