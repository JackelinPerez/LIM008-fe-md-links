export const path = require('path');
export const fs = require('fs');

export const reglinkMd = /(?<!!)\[(.*?)\]\((.*?)\)/g;

export const repeatedAccount = (data) => {
  const keysData = [...data].reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;
    return obj;
  }, {});
  return Object.keys(keysData);
};