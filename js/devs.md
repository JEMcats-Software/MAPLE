# JavaScript Developer Docs
Integrating MAPLE into your mapping/navigation system is easy to do.

## HTML
If you are use HTML for your maps, the code you need to add to your ```<body>``` is the following:
```
  <script>
    // Define global variables here.
    window.wordsUrl = "path to your "dist" directory (eg. "../../assets/dist/")"; // remove this line if you want to use the default word lists.
  </script>
  <script src="https://raw.githubusercontent.com/JEMcats-Software/MAPLE/refs/heads/main/js/MAPLE-helper.js"></script>
  <script src="https://raw.githubusercontent.com/JEMcats-Software/MAPLE/refs/heads/main/js/MAPLE-tools.js"></script>
  <script src="https://raw.githubusercontent.com/JEMcats-Software/MAPLE/refs/heads/main/js/MAPLE.js"></script>
  <script>
    // Run important services here.
    MAPLE.loadLists().then(() => console.log("All 4 JSON word lists loaded.")); // you can change console log to any action you would like.
  </script>
```

## JavaScript
This section will cover how to interact with MAPLE through your JavaScripts.

### Varibles
Customizing MAPLE is easy by using varibles

#### Lists
You can change the directory of the word lists by using:
```
window.wordsUrl = "path to your "dist" directory (eg. "../../assets/dist/")";
```

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
const encodedLatLon = MAPLE.encodeCoords(lat, lon) -> MAPLE//WORD1-WORD2-WORD3-WORD4
```
The result can be used with the MAPLE decoder.

#### Decoding
To encode a lat, lon with MAPLE you can use the following:
```
const decodedLatLon = MAPLE.decodeCoords(maple-code) -> {lat, lon}
```
The result can be used with the MAPLE encoder or other services (eg. Apple Maps).