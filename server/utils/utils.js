import _ from 'underscore';
import fs from 'fs';
import path from 'path';

export const ASSETS_LOCATION = path.join(__dirname, '../assets');
export const MIN_QUOTE_LENGTH = 2000;
export const MAX_QUOTE_LENGTH = 5000;

// get a random quote from the file at 'path' of length 'size' that starts and ends with whole words
export function getText(path) {
  return fs.readFileSync(path).toString().replace(/(?:\r\n|\r|\n)/g, ' ');
}

export const getRandomQuote = (path, size)=> {
  const file = getText(path);
  const start = Math.floor(Math.random() * (file.length - size));

  return file.substring(
    file.indexOf(' ', start) + 1,
    file.indexOf(' ', start + size)
  );
};

export const getRandomFile = ()=> {
  const files = fs.readdirSync(ASSETS_LOCATION).filter(file=> ~file.indexOf('.txt'));

  return path.join(
    ASSETS_LOCATION,
    files[Math.floor(Math.random() * (files.length))]
  );
};

export function getFile(filename) {
  return path.join(
    ASSETS_LOCATION,
    filename
  );
}

export function cartesianProduct() {
  return _.reduce(arguments, (a, b)=> {
    return _.flatten(_.map(a, x=> {
      return _.map(b, y => x + y);
    }), true);
  }, [[]]);
};
