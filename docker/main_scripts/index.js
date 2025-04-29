const { MAPLE, MAPLECoords } = require('@jemcats/maple');
const fs = require('fs');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({
    path: '/app/data/.env', // or use path.join(...)
  });
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: process.env.CORS_ORIGIN }));

(async () => {
    await MAPLE.loadLists();

    function updateStats(req, res) {
        const startBytesOut = req.socket.bytesWritten;
    
        // Calculate query string size manually
        const url = require('url');
        const parsedUrl = url.parse(req.originalUrl || req.url);
        const querySize = Buffer.byteLength(parsedUrl.search || '', 'utf8');
    
        res.on('finish', () => {
            const endBytesOut = req.socket.bytesWritten;
            const bytesOut = endBytesOut - startBytesOut;
    
            // Add estimated query param size to bytes in
            const bytesIn = querySize;
    
            fs.readFile('/app/data/stats.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading stats file:', err);
                    return;
                }
    
                const stats = JSON.parse(data);
                stats.requests = (stats.requests || 0) + 1;
                stats.bytes_in = (stats.bytes_in || 0) + bytesIn;
                stats.bytes_out = (stats.bytes_out || 0) + bytesOut;
    
                fs.writeFile('/app/data/stats.json', JSON.stringify(stats, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing stats file:', err);
                    }
                });
            });
        });
    }
    
    app.get('/api/pluscodes/encode', async (req, res) => {
        const { code } = req.query;
        updateStats(req, res);
        const encodedPlusCode = MAPLE.encode(code)
        res.json({ MAPLECODE: encodedPlusCode });
    })
    
    app.get('/api/pluscodes/decode', async (req, res) => {
        const { maple } = req.query;
        updateStats(req, res);
        const decodedPlusCode = MAPLE.decode(maple)
        res.json({ PLUSCODE: decodedPlusCode });
    })
    
    app.get('/api/coords/encode', async (req, res) => {
        const { lat, lon } = req.query;
        updateStats(req, res);
        const encodedLatLon = MAPLECoords.encode(Number(lat), Number(lon))
        res.json({ MAPLECODE: encodedLatLon });
    })
    
    app.get('/api/coords/decode', async (req, res) => {
        const { maple } = req.query;
        updateStats(req, res);
        const decodedLatLon = MAPLECoords.decode(maple)
        res.json(decodedLatLon);
    })
    
    if (process.env.EXPOSE_STATS === 'true') {
        app.get('/api/stats', async (req, res) => {
            fs.readFile('/app/data/stats.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading stats file:', err);
                    return;
                }
    
                const stats = JSON.parse(data);
                res.json(stats);
            });
        })
    }
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})()
