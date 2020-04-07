exports.getPlayers = (url) => fetch(url)
  .then((response) => response.json());

// Not fully implemented due to time constraints

exports.getPlayerById = (id) => {
  const players = JSON.parse(sessionStorage.getItem('players'));
  const playerToDisplay = players.find((el) => el.player.id === +id);

  return playerToDisplay;
};
