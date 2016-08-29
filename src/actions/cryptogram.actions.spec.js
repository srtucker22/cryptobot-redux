import { SocketIO, Server } from 'mock-socket';
import {expect} from 'chai';
import * as Actions from './cryptogram.actions';
import * as io from 'socket.io-client';
import * as utils from '../utils/utils';
import configureMockStore from 'redux-mock-store';
import mockery from 'mockery';
import nock from 'nock';
import sinon from 'sinon';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions: Cryptogram', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('when calling getRandomQuote', (done)=> {
    it('should query server for random quote and update cryptogram', () => {
      let response = {quote: 'this is a test quote', progress: 0};
      let scope = nock('http://localhost:3001')
        .get('/files/random_quote')
        .reply(200, response);

      const store = mockStore({});
      store.dispatch(Actions.getRandomQuote())
        .then(() => { // return of async actions
          expect(scope.isDone()).to.be.true;
          expect(store.getActions()).to.eql([{
            type: Actions.UPDATE_CRYPTOGRAM,
            cryptogram: {
              puzzle: response.quote,
              progress: 0
            }
          }]);
          done();
        });
    });
  });

  describe('when calling encrypt', ()=> {
    let sandbox;
    beforeEach(()=> {
      sandbox = sinon.sandbox.create();
    });

    afterEach(()=> {
      sandbox.restore();
    });

    it('should decrypt and update the cryptogram', () => {
      const stub = sandbox.stub(utils, 'encryptQuote', ()=> 'stubbed');
      const quote = 'test cryptogram';
      const store = mockStore({});
      store.dispatch(Actions.encrypt(quote));
      expect(store.getActions()).to.eql([{
        type: Actions.UPDATE_CRYPTOGRAM,
        cryptogram: {
          puzzle: 'stubbed',
          progress: 0
        }
      }]);
    });
  });

  describe('when calling decrypt', (done)=> {
    beforeEach(()=> {
      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });
    });

    afterEach(()=> {
      mockery.disable();
    });

    it('should query server for random quote and update cryptogram', () => {
      try {
        const mockServer = new Server('http://localhost:3001');
        const firstMessage = {
          puzzle: 'solving',
          progress: 1
        };

        const secondMessage = {
          puzzle: 'solved',
          progress: 100
        };

        mockServer.on('connection', socket => {
          socket.on('decrypt', (cryptogram)=> {
            socket.emit(firstMessage);
            setTimeout(()=> {
              socket.emit(secondMessage);
            }, 400);
          });
        });
      } catch (e) {
        // server has already been created
      }

      mockery.registerMock('io', SocketIO);

      const store = mockStore({});
      store.dispatch(Actions.decrypt({puzzle: 'test puzzle'}))
        .then(() => { // return of async actions
          expect(store.getActions()).to.eql([{
            type: Actions.UPDATE_CRYPTOGRAM,
            cryptogram: firstMessage
          }]);

          setTimeout(()=> {
            expect(store.getActions()).to.eql([{
              type: Actions.UPDATE_CRYPTOGRAM,
              cryptogram: firstMessage
            }, {
              type: Actions.UPDATE_CRYPTOGRAM,
              cryptogram: secondMessage
            }]);

            done();
          }, 500);
        });
    });
  });
});
