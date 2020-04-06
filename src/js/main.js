//Fetch Data + build components

document.addEventListener('DOMContentLoaded', () => {
  const fetchFbPlayersURL = '/football-players';
    getJSON(fetchFbPlayersURL).then(data => {

      console.log(data.players);

      const cardFilter = buildCardFilter(data.players);

      const root = document.getElementById('app');
      root.appendChild(cardFilter);

    }).catch(e => {
      console.log('Error ' + e);
    });
});