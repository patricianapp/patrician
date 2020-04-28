module.exports = {
	'{lib,pages,src}/*.ts': ['eslint --fix', 'prettier --write'],
	'{lib,pages,src}/*.{js,json}': ['prettier --write'],
	'docs/**/*': () => 'mkdocs build && git add public/docs',
};
