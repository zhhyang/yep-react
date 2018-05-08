const path = require('path');
const fs = require('fs');
const parseMarkdownFile = require('./parseMarkdownFile');

const getNameAndType = (filename) => {
  const r = filename.split(/\/|\\/);
  let type = 'unknown';

  if (r.length === 2) {
    type = 'component';
  } else if (r[1] === 'demo') {
    type = 'demo';
  }

  if (filename.match(/\.css$/)) {
    type = 'style';
  }

  return {
    component: r[0],
    type,
  };
};

class ComponentDocs {
  constructor() {
    this.components = {};
  }

  addMarkdonwFile(filename) {
    const fileInfo = getNameAndType(filename);
    let parsedContent;

    if (fileInfo.type === 'unknown') {
      return;
    }

    if (fileInfo.type === 'style') {
      parsedContent = fs.readFileSync(path.join(process.cwd(), 'src', filename), 'utf-8');
    } else {
      parsedContent = parseMarkdownFile(path.join(process.cwd(), 'src', filename));
    }


    if (!this.components[fileInfo.component]) {
      this.components[fileInfo.component] = {
        name: fileInfo.component,
      };
    }
    const component = this.components[fileInfo.component];
    if (fileInfo.type === 'component') {
      Object.assign(component, parsedContent);
    } else if (fileInfo.type === 'style') {
      component.style = parsedContent;
    } else {
      if (!component.demos) {
        component.demos = [];
      }

      component.demos.push(parsedContent);
    }
  }
}

module.exports = ComponentDocs;
