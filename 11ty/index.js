import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import codes from './codes.js';
import filters from './filters.js';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

function getMarkdown(path) {
	return {
		en: fs.readFileSync(`${dirname}/../source/content/${path}.en.md`, 'utf-8'),
		sv: fs.readFileSync(`${dirname}/../source/content/${path}.sv.md`, 'utf-8'),
	};
}

export {codes, filters, getMarkdown};
