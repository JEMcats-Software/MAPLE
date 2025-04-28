# NodeJS Developer Docs
Integrating MAPLE into your system is easy to do.

## Install
Pull the package:
```
npm install @jemcats/maple
```
add it to your code
```
const { MAPLE } = require('@jemcats/maple')
const { MAPLE, MAPLECoords } = require('@jemcats/maple') // if you are using lat, lon decoding.
```

## JavaScript
This section will cover how to interact with MAPLE through your JavaScripts.

### Encoding/Decoding Plus-Codes
Encoding and decoding Plus-Codes with MAPLE is simple. MAPLE adds the ```MAPLE``` variable for you to interact with.

#### Encoding
To encode a Plus-Code with MAPLE you can use the following:
```
const encodedPlusCode = MAPLE.encode(plus-code) -> MAPLE//WORD1-WORD2-WORD3-WORD4
```
The result can be used with the MAPLE decoder.

#### Decoding
To encode a Plus-Code with MAPLE you can use the following:
```
const decodedPlusCode = MAPLE.decode(maple-code) -> XXXXXXXX+XXX
```
The result can be used with the MAPLE encoder or Google Maps.

### Encoding/Decoding Lat, Lon
Encoding and decoding Plus-Codes with MAPLE is simple. MAPLE adds the ```MAPLE``` variable for you to interact with. For this you must add ```MAPLE-coords.js```.

#### Encoding
To encode a lat, lon with MAPLE you can use the following:
```
const encodedLatLon = MAPLECoords.encode(lat, lon) -> MAPLE//WORD1-WORD2-WORD3-WORD4
```
The result can be used with the MAPLE decoder.

#### Decoding
To encode a lat, lon with MAPLE you can use the following:
```
const decodedLatLon = MAPLECoords.decode(maple-code) -> {lat, lon}
```
The result can be used with the MAPLE encoder or other services (eg. Apple Maps).