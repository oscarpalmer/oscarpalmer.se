import about from './pages/about.js';
import colophon from './pages/colophon.js';
import contact from './pages/contact.js';
import home from './pages/home.js';
import projects from './pages/projects.js';

const navigation = [projects, about, contact];

const all = [...navigation, colophon, home];

const urls = {};

for (const page of all) {
	urls[page.url.en] = page.url.sv;
	urls[page.url.sv] = page.url.en;
}

export default {
	navigation,
	store: urls,
};
