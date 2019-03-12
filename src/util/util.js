export const path = require('path');
export const fs = require('fs');

export const reglinkMd = /[^!]\[(.*)\]\((.*)\)/g;

export const statsOrValidate = {
  validate: false,
  stats: false,
};
