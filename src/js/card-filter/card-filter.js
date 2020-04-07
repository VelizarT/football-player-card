const { buildFilter } = require('./filter');
const { buildCard } = require('./card');
const { dataGetCardOptions } = require('../utils/utils');
const { getPlayerById } = require('../utils/data-services');
const { populateCard } = require('./card');

exports.initializeCardFilter = (data) => {
  const cardFilter = document.createElement('div');
  cardFilter.classList.add('card-filter-cnt');

  // Initialize filter

  const filter = buildFilter(data);

  filter.addEventListener('change', function () {
    const playerToDisplay = getPlayerById(this.value);
    const playerOptions = dataGetCardOptions(playerToDisplay);
    populateCard(playerOptions);
  });

  const options = dataGetCardOptions(data[0]);
  const card = buildCard(options);

  // Initialize first card

  cardFilter.append(filter);
  cardFilter.append(card);

  return cardFilter;
};
