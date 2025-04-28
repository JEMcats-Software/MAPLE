const MAPLE = require('./src/MAPLE-helper.js');
require('./src/MAPLE-tools.js')(MAPLE);
require('./src/MAPLE.js')(MAPLE);
const MAPLECoords = require('./src/MAPLE-coords.js')(MAPLE);

module.exports = {
    MAPLE,
    MAPLECoords
};