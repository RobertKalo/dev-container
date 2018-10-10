const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

app.get('/api-node/hello', (req, res) => res.json('Hello, I\'m the C service on node (' + os.hostname() + ')'));

app.listen(port, () => console.log(`Service C listening on port ${port}!`));