"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _readLinks = require("./readLinks.js");

const validate = links => {
  const promises = links.map(link => {
    return (0, _readLinks.readLinks)(link.href).then(response => {
      return response.status >= 200 && response.status < 400 ? { ...link,
        status: response.status,
        statusMessage: 'OK'
      } : { ...link,
        status: response.status,
        statusMessage: 'FAIL'
      };
    });
  });
  return Promise.all(promises);
};

exports.validate = validate;