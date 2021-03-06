import * as routes from './routes/index.routes';
import * as utils from './utils/utils';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import socketIO from 'socket.io';
import solver from './utils/simulated-annealing';

export const makeServer = ()=> {
  const app = express();
  const server = http.Server(app);
  const io = socketIO(server);

  app.use(morgan('combined'));
  app.use(express.static(path.resolve(__dirname, '../build')));

  app.use('/files', routes.files);
  app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });

  io.on('connection', (socket) => {
    socket.on('decrypt', (cryptogram)=> {
      if (typeof cryptogram.puzzle === 'string') {
        solver.simulatedAnnealing(cryptogram, socket);
      }
    });
  });

  server.listen(process.env.PORT || 3001, () =>
    console.log('listening on ' + !!process.env.PORT ? process.env.PORT : 3001));

  return server;
};

makeServer();

export default makeServer;
