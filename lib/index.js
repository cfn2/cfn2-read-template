const { readFile } = require('fs');
const { extname } = require('path');
const yaml = require('js-yaml');
const schema = require('js-yaml-schema-cfn');

function readTemplate(path, callback) {
  readFile(path, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    const ext = extname(path);

    if (ext === '.yml' || ext === '.yaml') {
      callback(null, yaml.load(data, { schema }));
    } else {
      callback(null, JSON.parse(data));
    }
  });
}

/*
 * Exports.
 */
exports.readTemplate = readTemplate;
