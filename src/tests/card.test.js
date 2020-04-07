const { buildStatItem } = require('../js/card-filter/card');
const { buildStatsList } = require('../js/card-filter/card');
const { buildCardSubtitle } = require('../js/card-filter/card');
const { buildCardTitle } = require('../js/card-filter/card');
const { buildEmblem } = require('../js/card-filter/card');
const { buildProfileImg } = require('../js/card-filter/card');
const { buildContentContainer } = require('../js/card-filter/card');
const { buildImgContainer } = require('../js/card-filter/card');
const { buildCard } = require('../js/card-filter/card');

// Unit tests

test('Should build a list item', () => {
  const mockStat = { name: 'goals', value: 28 };
  const statItem = buildStatItem(mockStat);
  expect(statItem instanceof HTMLLIElement).toBe(true);
  expect(statItem.className).toBe('card__stats-detail');
  expect(statItem.children.length).toBe(2);
  expect(statItem.children[0].innerText).toBe('goals');
  expect(statItem.children[1].innerText).toBe(28);
});

test('Should build the card stats', () => {
  const mockStats = [
    {
      name: 'goals',
      value: 5,
    },
    {
      name: 'losses',
      value: 20,
    },
    {
      name: 'wins',
      value: 48,
    },
  ];
  const statsList = buildStatsList(mockStats);
  expect(statsList instanceof HTMLUListElement).toBe(true);
  expect(statsList.className).toBe('card__stats');
  expect(statsList.children.length).toBe(3);
  expect(statsList.children[1].children[0].innerText).toBe('losses');
});

test('Should build the card subtitle', () => {
  const mockSubtitle = 'Fullback';
  const subtitle = buildCardSubtitle(mockSubtitle);
  expect(subtitle instanceof HTMLHeadingElement).toBe(true);
  expect(subtitle.className).toBe('card__subtitle');
  expect(subtitle.innerText).toBe('Fullback');
});

test('Should build the card title', () => {
  const mockTitle = 'Velizar Tonchev';
  const title = buildCardTitle(mockTitle);
  expect(title instanceof HTMLHeadingElement).toBe(true);
  expect(title.className).toBe('card__title');
  expect(title.innerText).toBe('Velizar Tonchev');
});

test('Should build the card emblem', () => {
  const emblemOptions = {
    customClass: 'custom-class',
    altText: 'emblem',
  };
  const emblem = buildEmblem(emblemOptions);
  expect(emblem instanceof HTMLImageElement).toBe(true);
  expect(emblem.className).toBe('card__sprite custom-class');
  expect(emblem.src).toBe('http://localhost/img/transparent.png');
  expect(emblem.alt).toBe('emblem');
});

test('Should build the profile picture', () => {
  const profileImgOptions = {
    src: './img/p2064.png',
    altText: 'Wayne Rooney',
  };
  const profileImg = buildProfileImg(profileImgOptions);
  expect(profileImg instanceof HTMLImageElement).toBe(true);
  expect(profileImg.className).toBe('card__profile-img');
  expect(profileImg.src).toBe('http://localhost/img/p2064.png');
  expect(profileImg.alt).toBe('Wayne Rooney');
});

// Integration tests

test('Should build the card content container', () => {
  const mockTitleOptions = {
    title: 'Velizar Tonchev',
    subtitle: 'Defender',
  };
  const mockStats = [
    {
      name: 'goals',
      value: 5,
    },
    {
      name: 'losses',
      value: 20,
    },
    {
      name: 'wins',
      value: 48,
    },
  ];
  const contentContainer = buildContentContainer(mockTitleOptions, mockStats);
  expect(contentContainer instanceof HTMLDivElement).toBe(true);
  expect(contentContainer.className).toBe('card__content');
  expect(contentContainer.children.length).toBe(3);
  expect(contentContainer.children[0].innerText).toBe('Velizar Tonchev');
  expect(contentContainer.children[1].innerText).toBe('Defender');
  expect(contentContainer.children[2].children[0].children[0].innerText).toBe('goals');
  expect(contentContainer.children[2].children[0].children[1].innerText).toBe(5);
});

test('Should build the card image content container', () => {
  const profileImgOptions = {
    src: './img/p2064.png',
    altText: 'Wayne Rooney',
  };
  const emblemOptions = {
    customClass: 'custom-class',
    altText: 'emblem',
  };

  const imgContainer = buildImgContainer(profileImgOptions, emblemOptions);
  expect(imgContainer instanceof HTMLDivElement).toBe(true);
  expect(imgContainer.className).toBe('card__image');
  expect(imgContainer.children.length).toBe(2);
  expect(imgContainer.children[0].src).toBe('http://localhost/img/p2064.png');
  expect(imgContainer.children[0].alt).toBe('Wayne Rooney');
  expect(imgContainer.children[1].className).toBe('card__sprite custom-class');
  expect(imgContainer.children[1].alt).toBe('emblem');
});

test('Should build the card', () => {
  const options = {
    id: 2046,
    profileImgOptions: {
      src: './img/p2064.png',
      altText: 'Wayne Rooney',
    },
    emblemOptions: {
      customClass: 'custom-class',
      altText: 'emblem',
    },
    titleOptions: {
      title: 'Velizar Tonchev',
      subtitle: 'Defender',
    },
    stats: [
      {
        name: 'goals',
        value: 5,
      },
      {
        name: 'losses',
        value: 20,
      },
      {
        name: 'wins',
        value: 48,
      },
    ],
  };
  const card = buildCard(options);
  expect(card instanceof HTMLDivElement).toBe(true);
  expect(card.className).toBe('card');
  expect(card.children.length).toBe(2);
  expect(card.children[0].children[0].src).toBe('http://localhost/img/p2064.png');
  expect(card.children[0].children[0].alt).toBe('Wayne Rooney');
  expect(card.children[0].children[1].className).toBe('card__sprite custom-class');
  expect(card.children[0].children[1].alt).toBe('emblem');
  expect(card.children[1].children.length).toBe(3);
  expect(card.children[1].children[0].innerText).toBe('Velizar Tonchev');
  expect(card.children[1].children[1].innerText).toBe('Defender');
  expect(card.children[1].children[2].children[0].children[0].innerText).toBe('goals');
  expect(card.children[1].children[2].children[0].children[1].innerText).toBe(5);
});
