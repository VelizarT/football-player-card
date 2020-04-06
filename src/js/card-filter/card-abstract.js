exports.buildCard = (
  foregroundImgOptions,
  spriteOptions,
  titleOptions,
  stats,
) => {
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('name', id);
  cardContainer.classList.add('card', 'hidden');

  // Build img container

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card__image');

  const foregroundImg = document.createElement('img');
  foregroundImg.classList.add('card__foreground');
  foregroundImg.src = foregroundImgOptions.src;
  foregroundImg.setAttribute('alt', foregroundImg.altText);

  const sprite = document.createElement('img');
  sprite.classList.add('card__sprite', spriteOptions.customClass);
  sprite.src = './img/transparent.png';
  sprite.setAttribute('alt', spriteOptions.altText);

  imgContainer.appendChild(foregroundImg);
  imgContainer.appendChild(sprite);

  // Build content container

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('card__content');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card__title');
  cardTitle.innerText = titleOptions.title;

  const cardSubtitle = document.createElement('h4');
  cardSubtitle.classList.add('card__subtitle');
  cardSubtitle.innerText = titleOptions.subtitle;

  // Create stats list

  const statsContainer = document.createElement('ul');
  statsContainer.classList.add('card__stats');

  stats.forEach((stat) => {
    const statsItem = document.createElement('li');
    statsItem.classList.add('card__stats-detail');

    const statsName = document.createElement('em');
    statsName.innerText = stat.name;

    const statsValue = document.createElement('span');
    statsValue.innerText = stat.value;

    statsItem.appendChild(statsName);
    statsItem.appendChild(statsValue);

    statsContainer.appendChild(statsItem);
  });

  contentContainer.appendChild(cardTitle);
  contentContainer.appendChild(cardSubtitle);
  contentContainer.appendChild(statsContainer);

  // Build card

  cardContainer.appendChild(imgContainer);
  cardContainer.appendChild(contentContainer);

  return cardContainer;
};
