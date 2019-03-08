"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _readLinks = require("./readLinks.js");

const validate = links => {
  const promises = links.map(link => {
    return (0, _readLinks.readLinks)(link.href).then(response => {
      return { ...link,
        statusValue: !!response ? `${response.status}` : 'empty',
        statusMessage: !!response ? `${response.statusText}` : 'empty'
      };
    });
  });
  return Promise.all(promises);
};

exports.validate = validate;