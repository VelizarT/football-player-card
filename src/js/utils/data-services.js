const { players: playersObject } = require('../../data/player-stats.json');

// Mock function to fetch players

function getPlayers() {
  return playersObject;
}

// Mock function to fetch players by id

function getPlayerById(id) {
  const players = JSON.parse(sessionStorage.getItem('players'));
  const playerToDisplay = players.find((el) => el.player.id === +id);

  return playerToDisplay;
}

module.exports = {
  getPlayers,
  getPlayerById,
};
