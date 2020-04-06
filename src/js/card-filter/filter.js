const buildFilter = data => {

    const filter = document.createElement('select');
    filter.classList.add('filter');

    // Default option

    const defaultOption = document.createElement('option');
    defaultOption.innerText = 'Select a player...';
    defaultOption.setAttribute('disabled', true);
    defaultOption.setAttribute('selected', true);
    filter.appendChild(defaultOption);

    // Create dropdown

    data.forEach(element => {

        const { player: { id, name: { first: firstName, last: lastName } } } = element;

        const option = document.createElement('option');
        option.innerText = firstName + ' ' + lastName;
        option.value = id;

        filter.appendChild(option);
    });

    // Add onChange event

    filter.addEventListener('change', function() {
        const list = document.getElementsByClassName('card');

        for (const element of list) {
            element.classList.add('hidden');
        }
        
        document.getElementsByName(this.value)[0].classList.remove('hidden');
    });

    return filter;
}

