import express from 'express';
import * as routes from './routes/index.routes';

export const makeServer = ()=> {
  const app = express();
  app.get('/', function(req, res) {
    res.status(200).send('ok');
  });

  app.use('/files', routes.files);

  const server = app.listen(3001, ()=> {
    const port = server.address().port;
    console.log('Example app listening at port %s', port);
  });

  return server;
};

export default makeServer;
