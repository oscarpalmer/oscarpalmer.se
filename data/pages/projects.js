import {getMarkdown} from '../../11ty/index.js';

export default {
	description: {
		en: `Thingamajigs and other cool things I've worked on, both at and outside of work.`,
		sv: 'Mackapärer och andra coola saker jag har jobbat på, både inom och utanför jobbet.',
	},
	personal: {
		description: {
			en: `A few projects that I've worked on outside of work, both to escape the technologies used at work, but also to experiment with new technologies and ideas.`,
			sv: 'Ett par projekt som jag har jobbat på utanför jobbet, både för att undkomma de teknologier som används på jobbet, men även för att experimentera med nya teknologier och idéer.',
		},
		items: [
			{
				description: {
					en: 'A framework for creating web components using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">&ldquo;template literals&rdquo;</a>.',
					sv: 'Ett ramverk för att skapa webbkomponenter med hjälp av <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" hreflang="en" lang="en">&ldquo;template literals&rdquo;</a>.',
				},
				icon: 'hammer',
				title: 'Abydon',
				url: 'https://github.com/oscarpalmer/abydon',
			},
			{
				description: {
					en: 'Atomic helpers to assist with all kinds of <i>JavaScript</i>-stuff.',
					sv: 'Atomär hjälpfunktionalitet för att assistera alla möjliga sorters <i>JavaScript</i>-saker.',
				},
				icon: 'atom',
				title: 'Atoms',
				url: 'https://github.com/oscarpalmer/atoms',
			},
			{
				description: {
					en: 'A small date and time-library for handling dates and times in web browsers.',
					sv: 'Ett litet datum- och tidsbibliotek för att hantera datum och tider i webbläsare.',
				},
				icon: 'calendar',
				title: 'Datum',
				url: 'https://github.com/oscarpalmer/datum',
			},
			{
				description: {
					en: 'A <i>Stimulus</i>-like framework for developing web components with an attribute-based syntax.',
					sv: 'Ett <i>Stimulus</i>-liknande ramverk för att utveckla webbkomponenter med en attributbaserad syntax.',
				},
				icon: 'wand',
				title: 'Magnus',
				url: 'https://github.com/oscarpalmer/magnus',
			},
			{
				description: {
					en: 'A small library for working with <a href="https://github.com/tc39/proposal-signals?tab=readme-ov-file#background-why-signals">signals</a> in <i>JavaScript</i>.',
					sv: 'Ett litet bibliotek för att arbeta med <a href="https://github.com/tc39/proposal-signals?tab=readme-ov-file#background-why-signals" hreflang="en">signaler</a> i <i>JavaScript</i>.',
				},
				icon: 'books',
				title: 'Mora',
				url: 'https://github.com/oscarpalmer/mora',
			},
			{
				description: {
					en: 'A collection of styles, components, and utilities for building websites and applications.',
					sv: 'En samling av stilar, komponenter, och verktyg för att bygga webbsidor och applikationer.',
				},
				icon: 'baguette',
				title: 'Oui',
				url: 'https://github.com/oscarpalmer/oui',
			},
			{
				description: {
					en: 'A collection of badass DOM utilities, for working with elements, events, etc.',
					sv: 'En samling av grymma DOM-verktyg, för att arbeta med element, events, etc.',
				},
				icon: 'car',
				title: 'Toretto',
				url: 'https://github.com/oscarpalmer/toretto',
			},
		],
		suffix: {
			en: 'And of course, there are many more projects on my',
			sv: 'Och såklart finns det många fler projekt på min',
		},
		title: {
			en: 'Personal projects',
			sv: 'Personliga projekt',
		},
	},
	title: {
		en: 'Projects',
		sv: 'Projekt',
	},
	url: {
		en: '/en/projects/',
		sv: '/projekt/',
	},
	work: {
		description: {
			en: 'A short list of work-related projects that I can actually talk about, without the authorities knocking on my door…',
			sv: 'En kort lista av jobbrelaterade projekt som jag faktiskt kan prata om, utan att auktoriteterna kommer och knackar på dörren…',
		},
		items: [
			{
				description: getMarkdown('projects/work.evolution-3'),
				icon: 'recycle',
				title: 'Evolution 3',
			},
			{
				description: getMarkdown('projects/work.wiki-documentation'),
				icon: 'books',
				title: {
					en: 'Wiki & documentation',
					sv: 'Wiki & dokumentation',
				},
			},
		],
		title: {
			en: 'Work projects',
			sv: 'Jobbprojekt',
		},
	},
};
