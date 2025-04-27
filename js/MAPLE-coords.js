// Please add https://cdn.jsdelivr.net/openlocationcode/latest/openlocationcode.js to your HTML file.
// MAPLE-coords.js
// Adds encoding and decoding for lat and long coords.js

MAPLE.encodeCoords = function encodeCoords(lat, lon) {
   return MAPLE.encode(OpenLocationCode.encode(lat, lon, 11));
}

MAPLE.decodeCoords = function decodeCoords(MAPLEcode) {
    const decodeCode = OpenLocationCode.decode(MAPLE.decode(MAPLEcode));
    return {lat: decodeCode.latitudeCenter, lon: decodeCode.longitudeCenter};
}