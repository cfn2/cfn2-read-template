# cfn-read-template

Read templates of CloudFormation.

## Installation

```
npm i cfn-read-template -S
```

## Usage

``` javascript
const { readTemplate } = require('cfn-read-template');

readTemplate('path/to/template-file', (err, template) => {
});
```

## readTemplate(path, callback)

- `path`
  - A path to read a template.
- `callback(err, template)`
  - A callback which is called when parsing of a template is finished, or an error occurs.
  - If the template is YAML, abbreviated syntax is expanded.

## License

MIT
