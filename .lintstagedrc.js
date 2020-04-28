module.exports = {
	'*.ts': ['eslint --fix', 'prettier --write'],
	'*.{js,json}': ['prettier --write'],
	'docs/**/*': () => 'mkdocs build',
};
