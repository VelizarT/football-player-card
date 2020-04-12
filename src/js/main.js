// Fetch Data + build components

const { getPlayers } = require('./utils/data-services');
const initializeCardFilter = require('./card-filter/card-filter');

document.addEventListener('DOMContentLoaded', () => {
  const players = getPlayers();
  sessionStorage.setItem('players', JSON.stringify(players));
  const cardFilter = initializeCardFilter(players);

  const root = document.getElementById('app');
  root.appendChild(cardFilter);
});
