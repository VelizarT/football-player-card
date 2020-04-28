const { buildFilter } = require('../js/card-filter/filter');
const { buildDefaultOption } = require('../js/card-filter/filter');
const { buildOption } = require('../js/card-filter/filter');

it('Should build the default option', () => {
  const defaultOption = buildDefaultOption();
  expect(defaultOption instanceof HTMLOptionElement).toBe(true);
  expect(defaultOption.innerText).toBe('Select a player...');
  expect(defaultOption.getAttribute('disabled')).toBe('true');
  expect(defaultOption.getAttribute('selected')).toBe('true');
});

it('Should build option', () => {
  const mockOption = {
    displayName: 'Wayne Rooney',
    value: 2064,
  };
  const option = buildOption(mockOption);
  expect(option instanceof HTMLOptionElement).toBe(true);
  expect(option.innerText).toBe('Wayne Rooney');
  expect(option.value).toBe('2064');
});
