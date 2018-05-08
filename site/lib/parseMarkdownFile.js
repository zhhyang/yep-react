const yamlFront = require('yaml-front-matter');
const fs = require('fs');

module.exports = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  return yamlFront.loadFront(content);
};
