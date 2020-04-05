//Fetch Data + build components

const fetchFbPlayersURL = '/football-players';
getJSON(fetchFbPlayersURL).then((fbPlayers) => {
  console.log(fbPlayers);
}).catch((e) => {
  console.log('Error ' + e);
})








// const component = () => {
//   console.log('gulp');
//     const element = document.createElement('div');

//     element.innerHTML = 'It works';

//     return element;
//   }

// document.body.appendChild(component());