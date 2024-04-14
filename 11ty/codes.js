import meta from '../data/meta.js';
import filters from './filters.js';

function getDescription() {
	return filters.internationalise.call(
		this,
		this.description == null ? meta.description : this.description,
	);
}

function getTitle() {
	return `${
		this.title == null ? '' : `${filters.internationalise.call()} &ndash; `
	}${meta.author}`;
}

export default {
	getDescription,
	getTitle,
};
