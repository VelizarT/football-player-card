const buildCards = data => {

    const cardsContainer = document.createElement('div');

    data.forEach(element => {
        const card = buildCard(element);
        cardsContainer.appendChild(card);
    });

    return cardsContainer;
}