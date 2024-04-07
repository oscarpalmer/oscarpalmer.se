import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function getAriaCurrentFromUrl(value) {
	const url =
		typeof value === 'object' && value !== null
			? value[getLocale(this.page.url)]
			: value;

	return this.page.url === url ? 'aria-current="page"' : '';
}

function getLocale(url) {
	return url.startsWith('/en/') ? 'en' : 'sv';
}

function internationalise(value) {
	return typeof value !== 'object' || value === null
		? value
		: value[getLocale(this.page.url)];
}

function renderMarkdown(value) {
	return md.render(internationalise.call(this, value));
}

export default {
	getAriaCurrentFromUrl,
	getLocale,
	internationalise,
	renderMarkdown,
};
