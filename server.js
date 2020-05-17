const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')
var http = require('http');

app.use(bodyParser.json())
app.use(express.static('public'))

// App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});

// 

function logPaste(event) {
  log.innerText = 'Analyzing!\n' + log.innerText;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

editor.oncopy = logCopy;
editor.onpaste = logPaste;