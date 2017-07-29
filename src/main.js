require('dotenv').config({path: './environment/.env'}) // call by process.env
import Nightmare from 'nightmare';

const env = process.env;
let url = `${env.BASE_URL}.${env.TLD}${env.URL_PATH}${env.USER_KEY}`;
let nightmare = Nightmare(
  { show: false } // true = Debug
);

nightmare
  .goto(url)
  .end()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('ERROR', error);
  });
