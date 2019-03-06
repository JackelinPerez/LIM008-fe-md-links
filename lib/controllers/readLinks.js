"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResponse = exports.fetchPage = exports.readLinks = void 0;

var _getAllLinks = require("./getAllLinks");

const fetch = require('node-fetch');

const readLinks = (urlHttp, callback) => {
  fetch(urlHttp).then(response => {
    callback(response);
  }).catch(error => {
    callback(error.message);
  });
};

exports.readLinks = readLinks;

const fetchPage = url => {
  // console.log("URL", url);
  return fetch(url).catch(err => {
    return null;
  });
};

exports.fetchPage = fetchPage;

const getResponse = file => {
  const promises = (0, _getAllLinks.getAllLinksFiles)(file).map(link => {
    return fetchPage(link.href) // null.statusText
    .then(response => {
      return {
        file: link.file,
        href: link.href,
        test: link.text,
        status: !!response ? `${response.statusText} ${response.status}` : "roto"
      };
    });
  });
  return Promise.all(promises);
};

exports.getResponse = getResponse;