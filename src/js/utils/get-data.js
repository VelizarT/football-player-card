exports.getJSON = (url) => fetch(url)
  .then((response) => response.json());
