import fs from 'fs';
import path from 'path';
import * as utils from './utils';
import {expect} from 'chai';

describe('Server: Utils', ()=> {
  describe('when getting random quote', ()=> {
    it('returns a random quote with given size from given file', ()=> {
      let thePath = path.join(
        __dirname,
        '../../test/test.txt',
      );
      const randomQuote = utils.getRandomQuote(thePath, 10);
      expect(randomQuote.length).to.be.at.most(10);
      expect(~fs.readFileSync(thePath).toString().indexOf(randomQuote));
    });
  });

  describe('when getting random file', ()=> {
    it('returns a random file', ()=> {
      const randomFile = utils.getRandomFile();
      expect(randomFile.indexOf('/Users/simontucker/Documents/cryptobot-redux/server/assets/'))
        .to.equal(0);
    });
  });
});
