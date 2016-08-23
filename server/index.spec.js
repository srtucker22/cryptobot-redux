import {expect} from 'chai';
import {getRandomQuote} from './controllers/file.controller';
import makeServer from './index';
import request from 'supertest';
import sinon from 'sinon';

describe('Server: index', function() {
  let server;
  let sandbox;
  beforeEach(()=> {
    server = makeServer();
    sandbox = sinon.sandbox.create();
  });

  afterEach((done)=> {
    server.close(done);
    sandbox.restore();
  });

  describe('when we load the server', ()=> {
    it('responds to /', (done)=> {
      request(server)
        .get('/')
        .expect(200)
        .end((err, res)=> {
          done();
        });
    });

    it('responds to /files/random', (done)=> {
      let spy = sandbox.spy(getRandomQuote);

      request(server)
        .get('/files/random')
        .expect(200)
        .end((err, res)=> {
          if (err) return done(err);
          console.log(spy);
          done();
        });
    });

    it('404 everything else', (done)=> {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });
  });
});
