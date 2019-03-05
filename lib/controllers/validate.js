"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _readLinks = _interopRequireDefault(require("readLinks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validate = link => {
  const statusLink = (0, _readLinks.default)(link);
  return `${statusLink.status} ${statusLink.statusText}`;
};

exports.validate = validate;