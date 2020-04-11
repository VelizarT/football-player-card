// Fetch Data + build components
const { getPlayers } = require('./utils/data-services');
const { initializeCardFilter } = require('./card-filter/card-filter');

document.addEventListener('DOMContentLoaded', () => {
  const fetchFbPlayersURL = '/football-players';
  getPlayers(fetchFbPlayersURL).then((data) => {
    sessionStorage.setItem('players', JSON.stringify(data.players));
    console.log(data.players);
    const cardFilter = initializeCardFilter(data.players);

    const root = document.getElementById('app');
    root.appendChild(cardFilter);
  }).catch((e) => {
    console.log(`Error ${e}`);
  });
});
