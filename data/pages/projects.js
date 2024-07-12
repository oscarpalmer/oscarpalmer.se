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
					en: 'Atomic helpers to help with writing <i>CSS</i> and <i>JavaScript</i>.',
					sv: 'Atomär hjälpfunktionalitet för att underlätta skrivandet av <i>CSS</i> och <i>JavaScript</i>.',
				},
				icon: 'atom',
				title: 'Atoms',
				url: 'https://github.com/oscarpalmer/atoms',
			},
			{
				description: {
					en: 'A collection of reusable components for developing modern and functional web applications.',
					sv: 'En samling av återanvändbara komponenter för att utveckla av moderna och funktionella webbapplikationer.',
				},
				icon: 'components',
				title: 'Components',
				url: 'https://github.com/oscarpalmer/components',
			},
			{
				description: {
					en: 'My own little version of a state management library for web applications.',
					sv: 'Min egna lilla version av ett signalbibliotek för tillståndshantering i webbapplikationer.',
				},
				icon: 'shield',
				title: 'Sentinel',
				url: 'https://github.com/oscarpalmer/sentinel',
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
