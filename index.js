const express = require('express');
const fs = require('fs');
const app = express();

app.get('/image.jpg', (req, res) => {
    const referer = req.headers['referer'] || 'No Referer';
    fs.appendFileSync('referer_log.txt', `Referer: ${referer}\n`);
    res.setHeader('Link', '</log>; rel="preload"; as="image"; referrerpolicy="unsafe-url"');
    res.sendFile(__dirname + '/logo.jpg');
});

app.get('/log', (req, res) => {
    const referer = req.headers['referer'] || 'No Referer';
    fs.appendFileSync('referer_log.txt', `Referer: ${referer}\n`);
    res.send('Log recorded');
});

app.listen(process.env.PORT || 3000);
