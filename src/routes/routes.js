const path = require('path');
const fbPlayersRoutes = require('./football-players');

const appRouter = (app, fs) => {

    const distRoot = path.join(__dirname + '/../../dist')

    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: distRoot });
    });

    fbPlayersRoutes(app, fs);

};

module.exports = appRouter;