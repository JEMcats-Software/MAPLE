const { MAPLE, MAPLECoords } = require('@jemcats/maple'); // Adjust if necessary

(async () => {
  try {
    console.log('Loading word lists...');
    await MAPLE.loadLists();
    console.log('Word lists loaded successfully.');

    // Test Plus Code
    const plusCode = '849VCWC8+R93'; // Example Plus Code
    console.log('Original Plus Code:', plusCode);

    // Encode Plus Code to MAPLE code
    const mapleCode = MAPLE.encode(plusCode);
    console.log('Encoded MAPLE Code:', mapleCode);

    // Decode MAPLE code back to Plus Code
    const decodedPlusCode = MAPLE.decode(mapleCode);
    console.log('Decoded Plus Code:', decodedPlusCode);

    // Verify that original and decoded Plus Codes match
    console.log('Plus Code match:', plusCode === decodedPlusCode);

    // Test Coords
    const testLat = 37.422; // Example latitude
    const testLon = -122.084; // Example longitude

    // Encode coords to MAPLE code
    const mapleCoordsCode = MAPLECoords.encode(testLat, testLon);
    console.log('Encoded MAPLE Coords Code:', mapleCoordsCode);

    // Decode MAPLE coords code back to lat/lon
    const decodedCoords = MAPLECoords.decode(mapleCoordsCode);
    console.log('Decoded Coordinates:', decodedCoords);

    // Check if the decoded coordinates are close to the original
    const latClose = Math.abs(decodedCoords.lat - testLat) < 0.001;
    const lonClose = Math.abs(decodedCoords.lon - testLon) < 0.001;
    console.log('Coordinates close match:', latClose && lonClose);

  } catch (err) {
    console.error('Test failed:', err);
  }
})();