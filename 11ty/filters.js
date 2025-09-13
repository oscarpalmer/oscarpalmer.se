import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
	html: true,
});

function getAlternateLocale(url) {
	return url.startsWith('/en/') ? 'sv' : 'en';
}

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

function internationalize(value) {
	return typeof value !== 'object' || value === null
		? value
		: value[getLocale(this.page.url)];
}

function renderMarkdown(value, links) {
	const localized = internationalize.call(this, value);

	return md.render(
		links == null
			? localized
			: localized.replace(
					/{{(.*?)}}/g,
					(_, key) => `[${links[key].title}](${links[key].url})`,
				),
	);
}

export default {
	getAlternateLocale,
	getAriaCurrentFromUrl,
	getLocale,
	internationalize,
	renderMarkdown,
};
