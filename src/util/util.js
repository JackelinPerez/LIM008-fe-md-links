export const path = require('path');
export const fs = require('fs');

export const reglinkIntoMd = new RegExp (/[^!]\[(.*)\]\((.*)\)/g);
export const regTextHref = new RegExp (/[^!]\[(.*)\]\((.*)\)/);