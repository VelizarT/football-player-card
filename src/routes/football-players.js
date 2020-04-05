const path = require('path');

const fbPlayersRoutes = (app, fs) => {

    // variables
    const dataPath = path.join(__dirname, '../data/player-stats.json');

    // Read data
    app.get('/football-players', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = fbPlayersRoutes;