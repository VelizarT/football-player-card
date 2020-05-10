const initializeCardFilter = require('../js/card-filter/card-filter');

it('Should initialize the card filter component', () => {
  const mockCardFilterData = [
    {
      player: {
        info: {
          position: 'F',
        },
        name: {
          first: 'Wayne',
          last: 'Rooney',
        },
        id: 2064,
        currentTeam: {
          name: 'Manchester United',
          id: 12,
        },
      },
      stats: [
        {
          name: 'goals',
          value: 201,
        },
        {
          name: 'losses',
          value: 91,
        },
        {
          name: 'wins',
          value: 280,
        },
        {
          name: 'draws',
          value: 90,
        },
        {
          name: 'fwd_pass',
          value: 1795,
        },
        {
          name: 'goal_assist',
          value: 84,
        },
        {
          name: 'appearances',
          value: 461,
        },
        {
          name: 'mins_played',
          value: 27056,
        },
        {
          name: 'backward_pass',
          value: 1928,
        },
      ],
    },
  ];
  const cardFilter = initializeCardFilter(mockCardFilterData);

  expect(cardFilter instanceof HTMLDivElement).toBe(true);
  expect(cardFilter.children[0] instanceof HTMLSelectElement).toBe(true);
  expect(cardFilter.children[0].className).toBe('filter');
  expect(cardFilter.children[1].className).toBe('card');
});
