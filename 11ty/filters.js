import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import MarkdownIt from 'markdown-it';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const icons = path.dirname(
	`${dirname}/../node_modules/@tabler/icons/icons/outline/x.svg`,
);

const md = new MarkdownIt({
	html: true,
});

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

function icon(value) {
	return (
		fs
			.readFileSync(`${icons}/${value}.svg`, 'utf-8')
			?.replace(/^\<svg/, '<svg aria-hidden="true"') ?? ''
	);
}

function internationalise(value) {
	return typeof value !== 'object' || value === null
		? value
		: value[getLocale(this.page.url)];
}

function renderMarkdown(value, links) {
	const localised = internationalise.call(this, value);

	return md.render(
		links == null
			? localised
			: localised.replace(
					/{{(.*?)}}/g,
					(_, key) => `[${links[key].title}](${links[key].url})`,
				),
	);
}

export default {
	getAriaCurrentFromUrl,
	getLocale,
	icon,
	internationalise,
	renderMarkdown,
};
