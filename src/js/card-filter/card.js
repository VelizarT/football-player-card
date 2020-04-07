// Build card

exports.buildCard = (options) => {
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('name', options.id);
  cardContainer.classList.add('card');

  const imgContainer = this.buildImgContainer(options.profileImgOptions, options.emblemOptions);
  const contentContainer = this.buildContentContainer(options.titleOptions, options.stats);

  cardContainer.appendChild(imgContainer);
  cardContainer.appendChild(contentContainer);

  return cardContainer;
};

// Build image container

exports.buildImgContainer = (profileImgOptions, emblemOptions) => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card__image');

  const foregroundImg = this.buildProfileImg(profileImgOptions);
  const sprite = this.buildEmblem(emblemOptions);

  imgContainer.appendChild(foregroundImg);
  imgContainer.appendChild(sprite);

  return imgContainer;
};

// Build foreground image

exports.buildProfileImg = (profileImgOptions) => {
  const profileImg = document.createElement('img');
  profileImg.classList.add('card__profile-img');
  profileImg.src = profileImgOptions.src;
  profileImg.setAttribute('alt', profileImgOptions.altText);

  return profileImg;
};

// Build emblem

exports.buildEmblem = (emblemOptions) => {
  const emblem = document.createElement('img');
  emblem.classList.add('card__sprite', emblemOptions.customClass);
  emblem.src = './img/transparent.png';
  emblem.setAttribute('alt', emblemOptions.altText);

  return emblem;
};

// Build card content container

exports.buildContentContainer = (titleOptions, stats) => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('card__content');

  const cardTitle = this.buildCardTitle(titleOptions.title);
  const cardSubtitle = this.buildCardSubtitle(titleOptions.subtitle);
  const statsContainer = this.buildStatsList(stats);

  contentContainer.appendChild(cardTitle);
  contentContainer.appendChild(cardSubtitle);
  contentContainer.appendChild(statsContainer);

  return contentContainer;
};

// Build card title

exports.buildCardTitle = (title) => {
  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card__title');
  cardTitle.innerText = title;

  return cardTitle;
};

// Build card subtitle

exports.buildCardSubtitle = (subtitle) => {
  const cardSubtitle = document.createElement('h4');
  cardSubtitle.classList.add('card__subtitle');
  cardSubtitle.innerText = subtitle;

  return cardSubtitle;
};

// Build stats list

exports.buildStatsList = (stats) => {
  const statsContainer = document.createElement('ul');
  statsContainer.classList.add('card__stats');
  stats.forEach((item) => {
    const statsItem = this.buildStatItem(item);
    statsContainer.appendChild(statsItem);
  });

  return statsContainer;
};

// Build stats item

exports.buildStatItem = (stat) => {
  const statsItem = document.createElement('li');
  statsItem.classList.add('card__stats-detail');

  const statsName = document.createElement('em');
  statsName.innerText = stat.name;

  const statsValue = document.createElement('span');
  statsValue.innerText = stat.value;

  statsItem.appendChild(statsName);
  statsItem.appendChild(statsValue);

  return statsItem;
};

exports.populateCard = (options) => {
  const card = document.getElementsByClassName('card')[0];
  card.children[0].children[0].src = options.profileImgOptions.src;
  card.children[0].children[0].alt = options.profileImgOptions.alt;
  card.children[0].children[1].className = `card__sprite ${options.emblemOptions.customClass}`;
  card.children[0].children[1].alt = options.emblemOptions.alt;
  card.children[1].children[0].innerText = options.titleOptions.title;
  card.children[1].children[1].innerText = options.titleOptions.subtitle;

  options.stats.forEach((stat, i) => {
    card.children[1].children[2].children[0].children[0].innerText = stat.name;
    card.children[1].children[2].children[0].children[1].innerText = stat.value;
  });
};
