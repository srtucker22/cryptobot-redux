import fs from 'fs';
import path from 'path';

export const ASSETS_LOCATION = path.join(__dirname, '../assets');
export const MIN_QUOTE_LENGTH = 2000;
export const MAX_QUOTE_LENGTH = 5000;

export const getRandomQuote = (path, size)=> {
  let file = fs.readFileSync(path).toString().replace(/(?:\r\n|\r|\n)/g, ' ');
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
