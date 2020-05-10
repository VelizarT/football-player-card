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

function calculateGoalsPerMatch(losses, wins, draws, goals) {
  return goals / (losses + wins + draws);
}

function calculatePassesPerMinute(fwdPass, bckdPass, minPlayed) {
  return (fwdPass + bckdPass) / minPlayed;
}

function dataGetFilterOptions(element) {
  const { player: { name: { first: firstName, last: lastName }, id } } = element;
  optionOptions = {
    displayName: `${firstName} ${lastName}`,
    value: id,
  };
  return optionOptions;
}

function getStats(stats) {
  const finalStats = [];
  let goals;
  let losses;
  let wins;
  let draws;
  let fwdPass;
  let bckdPass;
  let minPlayed;

  for (let i = 0; i < stats.length; i += 1) {
    const curentStatName = stats[i].name;
    if (curentStatName === 'appearances') {
      const stat = {
        name: 'Appearances',
        value: stats[i].value,
      };
      finalStats.push(stat);
    } else if (curentStatName === 'goals') {
      const stat = {
        name: 'Goals',
        value: stats[i].value,
      };
      goals = stats[i].value;
      finalStats.push(stat);
    } else if (curentStatName === 'goal_assist') {
      const stat = {
        name: 'Assists',
        value: stats[i].value,
      };
      finalStats.push(stat);
    } else if (curentStatName === 'losses') {
      losses = stats[i].value;
    } else if (curentStatName === 'wins') {
      wins = stats[i].value;
    } else if (curentStatName === 'draws') {
      draws = stats[i].value;
    } else if (curentStatName === 'fwd_pass') {
      fwdPass = stats[i].value;
    } else if (curentStatName === 'backward_pass') {
      bckdPass = stats[i].value;
    } else if (curentStatName === 'mins_played') {
      minPlayed = stats[i].value;
    }
  }
  if (losses !== undefined
      && wins !== undefined
      && draws !== undefined
      && goals !== undefined) {
    const golasPerMatch = Math.round(
      calculateGoalsPerMatch(losses, wins, draws, goals) * 100,
    ) / 100;
    const stat = {
      name: 'Goals per match',
      value: golasPerMatch,
    };
    finalStats.push(stat);
  }
  if (fwdPass !== undefined
      && bckdPass !== undefined
      && minPlayed !== undefined) {
    const golasPerMatch = Math.round(
      calculatePassesPerMinute(
        fwdPass, bckdPass, minPlayed,
      ) * 100,
    ) / 100;
    const stat = {
      name: 'Passes per minute',
      value: golasPerMatch,
    };
    finalStats.push(stat);
  }

  return finalStats;
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

  stats = getStats(stats);

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
  getStats,
  calculateGoalsPerMatch,
  calculatePassesPerMinute,
  dataGetFilterOptions,
  dataGetCardOptions,
};
