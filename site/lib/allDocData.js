const glob = require('glob');
const path = require('path');
const ComponentDocs = require('./ComponentDocs');
const parseMarkdownFile = require('./parseMarkdownFile');

const tree = new ComponentDocs();
const rootDir = process.cwd();

const mdFiles = glob.sync('**/*.@(md|css)', {
  cwd: path.resolve(rootDir, './src'),
});

mdFiles.forEach(filename => tree.addMarkdonwFile(filename));

const docFiles = glob.sync('{./site/doc/*.md,./CHANGELOG.md}', {
  cwd: rootDir,
});

const docs = docFiles.map((filename) => {
  const doc = parseMarkdownFile(filename);
  doc.id = path.basename(filename).replace(/\.md/, '');
  return doc;
});

module.exports = () => ({
  code: `module.exports = ${JSON.stringify({
    docs,
    components: tree.components,
  })}`,
  cacheable: true,
  contextDependencies: [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'site')],
});
