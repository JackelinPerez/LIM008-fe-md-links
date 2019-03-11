export const path = require('path');
export const fs = require('fs');

export const reglinkMd = new RegExp(/[^!]\[(.*)\]\((.*)\)/g);

export const statsOrValidate = {
  validate: false,
  stats: false,
};