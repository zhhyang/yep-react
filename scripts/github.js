const shell = require('shelljs');
const pkg = require('../package.json');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
shell.echo(`git tag -a ${pkg.version} -m ${pkg.version}`);
if (shell.exec(`git tag -a ${pkg.version} -m ${pkg.version}`).code !== 0) {
  shell.echo('Git tag failed');
  shell.exit(1);
}
shell.echo(`git push tag ${pkg.version}`);
if (shell.exec(`git push origin ${pkg.version}`).code !== 0) {
  shell.echo('Git push failed');
  shell.exit(1);
}
