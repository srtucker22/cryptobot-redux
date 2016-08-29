import * as utils from '../utils/utils';

export const getRandomQuote = (req, res)=> {
  const filename = utils.getRandomFile();
  const length = Math.floor(
    Math.random() * (utils.MAX_QUOTE_LENGTH - utils.MIN_QUOTE_LENGTH)
  ) + utils.MIN_QUOTE_LENGTH;
  res.status(200).send({quote: utils.getRandomQuote(filename, length)});
};
