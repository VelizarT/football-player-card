// Fetch Data + build components
const { getJSON } = require('./utils/get-data');
const { buildCardFilter } = require('./card-filter/card-filter');

document.addEventListener('DOMContentLoaded', () => {
  const fetchFbPlayersURL = '/football-players';
  getJSON(fetchFbPlayersURL).then((data) => {
    const cardFilter = buildCardFilter(data.players);
    const root = document.getElementById('app');
    root.appendChild(cardFilter);
  }).catch((e) => {
    console.log(`Error ${e}`);
  });
});
