const glob = require('glob');
const path = require('path');
const ComponentDocs = require('../site/lib/ComponentDocs');
//const parseMarkdownFile = require('../site/lib/parseMarkdownFile');

const tree = new ComponentDocs();
const rootDir = process.cwd();

const mdFiles = glob.sync('**/*.@(md|css)', {
  cwd: path.resolve(rootDir, './src'),
});

mdFiles.forEach(filename => tree.addMarkdonwFile(filename));


module.exports = () => ({
  code: `module.exports = ${JSON.stringify({
    components: tree.components,
  })}`,
  cacheable: true,
  contextDependencies: [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'demo')],
});
