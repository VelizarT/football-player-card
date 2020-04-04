// import './styles/styles.scss';
// import './components/filter';

function component() {
  console.log('gulp');
    const element = document.createElement('div');

    element.innerHTML = 'It works';

    return element;
  }

  document.body.appendChild(component());