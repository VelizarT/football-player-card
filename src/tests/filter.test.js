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

it('Should build the filter', () => {
  const mockFilterData = [
    {
      player: {
        name: {
          first: 'Wayne',
          last: 'Rooney',
        },
        id: 2064,
      },
    },
  ];
  const filter = buildFilter(mockFilterData);

  expect(filter instanceof HTMLSelectElement).toBe(true);
  expect(filter.children[0].innerText).toBe('Select a player...');
  expect(filter.children[0].value).toBe('');
  expect(filter.children[1].innerText).toBe('Wayne Rooney');
  expect(filter.children[1].value).toBe('2064');
});
