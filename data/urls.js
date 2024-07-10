import aboutColophon from './pages/about/colophon.js';
import aboutIndex from './pages/about/index.js';
import aboutMe from './pages/about/me.js';
import contact from './pages/contact.js';
import home from './pages/home.js';
import projects from './pages/projects.js';

const navigation = [projects, aboutMe, contact];

const all = [...navigation, aboutColophon, aboutIndex, home];

const urls = {};

for (const page of all) {
	urls[page.url.en] = page.url.sv;
	urls[page.url.sv] = page.url.en;
}

export default {
	navigation,
	store: urls,
};
