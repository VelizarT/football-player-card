function getPosition(positionShort) {
  switch (positionShort) {
    case 'D':
      return 'Defender';
    case 'M':
      return 'Midfielder';
    case 'F':
      return 'Fullback';
    default:
      return 'Position not found';
  }
}

function getStatsFullName(statShort) {
  switch (statShort) {
    case 'goals':
      return 'GOALS';
    case 'losses':
      return 'LOSSES';
    case 'wins':
      return 'WINS';
    case 'draws':
      return 'DRAWS';
    case 'fwd_pass':
      return 'FORWARD PASSES';
    case 'goal_assist':
      return 'GOAL ASSIST';
    case 'appearances':
      return 'APPEREANCES';
    case 'mins_played':
      return 'MIN PLAYED';
    case 'backward_pass':
      return 'BACKWORD PASSES';
    default:
      return 'No stat found';
  }
}

function dataGetFilterOptions(element) {
  const { player: { name: { first: firstName, last: lastName }, id } } = element;
  optionOptions = {
    displayName: `${firstName} ${lastName}`,
    value: id,
  };
  return optionOptions;
}

function dataGetCardOptions(element) {
  const {
    player: {
      id,
      name: { first: firstName, last: lastName },
      info: { position },
      currentTeam: { id: teamId, name: teamName },
    },
  } = element;

  let { stats } = element;

  stats = stats.map((item) => {
    return {
      name: getStatsFullName(item.name),
      value: item.value,
    };
  });

  const options = {
    id,
    profileImgOptions: {
      src: `./img/p${id}.png`,
      altText: `${firstName} ${lastName}`,
    },
    emblemOptions: {
      customClass: `card__emblem--${teamId}`,
      altText: `${teamName} logo`,
    },
    titleOptions: {
      title: `${firstName} ${lastName}`,
      subtitle: getPosition(position),
    },
    stats,
  };
  return options;
}

module.exports = {
  getPosition,
  getStatsFullName,
  dataGetFilterOptions,
  dataGetCardOptions,
};
