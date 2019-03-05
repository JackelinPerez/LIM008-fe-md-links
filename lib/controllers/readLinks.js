"use strict";

const fetch = require('node-fetch');

const readLinks = (urlHttp, callback) => {
  fetch(urlHttp).then(response => {
    callback(response.status === 200 ? 'ok 200' : `fail ${response.status}`);
  }).catch(error => {
    callback(error.message);
  });
};

readLinks('https://raw.githubusercontent.com/JackelinPeregz/lim-2018-11-bc-core-am-data-lovers/master/src/data/pokemon/pokemon.json', result => {
  console.log(result);
});