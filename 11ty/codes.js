import meta from '../data/meta.js';
import filters from './filters.js';

function getDescription() {
	const {description} = this.ctx.scopes[0];

	return filters.internationalise.call(this, description ?? meta.description);
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
	getTitle,
};
