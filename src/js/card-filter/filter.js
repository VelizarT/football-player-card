const { dataGetFilterOptions } = require('../utils/utils');

// Build filter

exports.buildFilter = (data) => {
  const filter = document.createElement('select');
  filter.classList.add('filter');

  // Default option

  const defaultOption = this.buildDefaultOption();
  filter.appendChild(defaultOption);

  // Create dropdown

  data.forEach((element) => {
    const optionOptions = dataGetFilterOptions(element);
    const option = this.buildOption(optionOptions);

    filter.appendChild(option);
  });

  // Add onChange event

  return filter;
};

// Build default option

exports.buildDefaultOption = () => {
  const defaultOption = document.createElement('option');
  defaultOption.innerText = 'Select a player...';
  defaultOption.setAttribute('disabled', true);
  defaultOption.setAttribute('selected', true);

  return defaultOption;
};

// Build default option

exports.buildOption = (optionOptions) => {
  const option = document.createElement('option');
  option.innerText = optionOptions.displayName;
  option.value = optionOptions.value;

  return option;
};
