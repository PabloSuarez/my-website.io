const http = require('http');
const express = require('express');
const app = express();
const compression = require('compression');

const socketIo = require('socket.io');
const axios = require('axios');

const port = process.env.PORT || 4000;
const chatRouter = require('./routes/');




/*************************
    socket
*************************/
const server = http.createServer(app);
const io = socketIo(server);
const getApiAndEmit = async socket => {
  try {
    const res = await axios.get('https://api.github.com/users/PabloSuarez/repos');
    // Getting the data from DarkSky
    socket.emit('FromAPI', res.data);
    // Emitting a new message. It will be consumed by the client
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

let interval;
io.on('connection', socket => {
  console.log('New client connected');
  if (interval) clearInterval(interval);

  interval = setInterval(
    () => getApiAndEmit(socket),
    10000
  );

  socket.on('disconnect', () => console.log('Client disconnected'));
});
/*************************
    end socket
*************************/




/* compress files */
app.use(compression());




/*************************
    website routes
*************************/
// app.use(chatRouter);
app.use('/', express.static(__dirname));
app.use('/my-website.io/static', express.static(__dirname + '/static'));
/*************************
    end website routes
*************************/




app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
