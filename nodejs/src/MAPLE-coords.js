// MAPLE-coords.js

const PlusCodes = require('olc-plus-codes').PlusCodes;
const plusCodes = new PlusCodes();

module.exports = function(MAPLE) {
    return {
        encode: function(lat, lon) {
            // Generate a full-length (12-character) Plus Code
            const plusCode = plusCodes.encode(lat, lon, 11);
            if (!plusCode) {
                throw new Error(`olc-plus-codes returned null for lat=${lat}, lon=${lon}`);
            }
            return MAPLE.encode(plusCode);
        },

        decode: function(MAPLEcode) {
            // Decode MAPLE back to a Plus Code
            const plusCode = MAPLE.decode(MAPLEcode);
            if (!plusCode) {
                throw new Error(`MAPLE.decode returned invalid code for MAPLEcode=${MAPLEcode}`);
            }
            // Decode Plus Code to area bounds
            const area = plusCodes.decode(plusCode);
            if (!area || typeof area.latitudeLo !== 'number' || typeof area.latitudeHi !== 'number') {
                throw new Error(`olc-plus-codes.decode returned invalid area for code=${plusCode}`);
            }
            // Compute center point
            const latCenter = (area.latitudeLo + area.latitudeHi) / 2;
            const lonCenter = (area.longitudeLo + area.longitudeHi) / 2;
            return { lat: latCenter, lon: lonCenter };
        }
    }
}