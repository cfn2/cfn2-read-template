const test = require('tape');
const { readTemplate } = require('..');

test('test', t => {
  t.plan(3);

  readTemplate(__dirname + '/template.json', (err, jsonTemplate) => {
    t.error(err);

    readTemplate(__dirname + '/template.yaml', (err, yamlTemplate) => {
      t.error(err);

      t.deepEqual(jsonTemplate, yamlTemplate);
    });
  });
});
