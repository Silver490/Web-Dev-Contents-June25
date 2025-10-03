const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;



app.use(express.static(path.join(__dirname, 'public')));


//setting up socket.io
const http = require('http')
const i0 = createServer(app);

