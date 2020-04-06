const buildCardFilter = data => {

    const cardFilter = document.createElement('div');
    cardFilter.classList.add('card-filter-cnt');
    
    const filter = buildFilter(data);
    const cards = buildCards(data);

    //Show first card

    cards.firstChild.classList.remove('hidden');

    cardFilter.append(filter);
    cardFilter.append(cards);

    return cardFilter;
}