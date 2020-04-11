const { dataGetFilterOptions } = require('../utils/utils');

// Build default option

function buildDefaultOption() {
  const defaultOption = document.createElement('option');
  defaultOption.innerText = 'Select a player...';
  defaultOption.setAttribute('disabled', true);
  defaultOption.setAttribute('selected', true);

  return defaultOption;
}

// Build default option

function buildOption(optionOptions) {
  const option = document.createElement('option');
  option.innerText = optionOptions.displayName;
  option.value = optionOptions.value;

  return option;
}

// Build filter

function buildFilter(data) {
  const filter = document.createElement('select');
  filter.classList.add('filter');

  // Default option

  const defaultOption = buildDefaultOption();
  filter.appendChild(defaultOption);

  // Create dropdown

  data.forEach((element) => {
    const optionOptions = dataGetFilterOptions(element);
    const option = buildOption(optionOptions);

    filter.appendChild(option);
  });

  // Add onChange event

  return filter;
}

module.exports = {
  buildFilter,
  buildDefaultOption,
  buildOption,
};
