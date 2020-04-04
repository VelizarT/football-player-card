// import './styles/styles.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'It works';

    return element;
  }

  document.body.appendChild(component());