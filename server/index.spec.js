import * as utils from './utils/utils';
import {expect} from 'chai';
import makeServer from './index';
import request from 'supertest';

describe('Server: index', function() {
  let server;
  beforeEach(()=> {
    server = makeServer();
  });

  afterEach((done)=> {
    server.close(done);
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
      request(server)
        .get('/files/random')
        .expect(200)
        .end((err, res)=> {
          if (err) {return done(err);};
          expect(res.body.quote).to.have.length.above(utils.MIN_QUOTE_LENGTH);
          expect(res.body.quote).to.have.length.below(utils.MAX_QUOTE_LENGTH);
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
