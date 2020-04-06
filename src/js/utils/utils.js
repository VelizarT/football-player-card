exports.getPosition = (positionShort) => {
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
};

exports.getStatsFullName = (statShort) => {
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
};
