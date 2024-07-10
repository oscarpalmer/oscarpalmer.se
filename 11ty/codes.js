import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import meta from '../data/meta.js';
import filters from './filters.js';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

function getDescription() {
	const {description} = this.ctx.scopes[0];

	return filters.internationalise.call(this, description ?? meta.description);
}

function getStyles() {
	return fs.readFileSync(
		`${dirname}/../build/assets/stylesheets/styles.css`,
		'utf-8',
	);
}

function getTitle() {
	const {title} = this.ctx.scopes[0];

	return `${
		title == null
			? ''
			: `${filters.internationalise.call(this, title)} &ndash; `
	}${meta.author}`;
}

export default {
	getDescription,
	getStyles,
	getTitle,
};
