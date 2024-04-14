export default {
	description: {
		en: `Projects and other cool things I've worked on, both at and outside of work.`,
		sv: 'Projekt och andra coola saker jag har jobbat på, både på och utanför jobbet.',
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
			en: 'A short list of work-related projects that I can actually talk about, without the authorities knocking on my door.',
			sv: 'En kort lista av jobbrelaterade projekt som jag faktiskt kan prata om, utan att auktoriteterna kommer och knackar på dörren.',
		},
		items: [
			{
				description: {
					en: `The next big version of [Botek's](https://botek.se) primary software suite used in waste management and recycling to plan, monitor, and report. The suite consists of several software applications that work together, where I lead the development of one of them and support the others.

The web application used for planning and monitoring is written in <i>Angular</i>; the application used out in the field is written in <i>Kotlin</i> <i>(and Java)</i>; the server software that handles data management is written in <i>C#</i>, with some functionality written in <i>Rust</i>.`,
					sv: `Nästa stora version av [Boteks](https://botek.se) primära mjukvarusvit som används inom avfallshantering och återvinning för planering, uppföljning, och rapportering. Sviten består av flera programvaror som arbetar tillsammans, där jag leder utvecklingen av en av dem och stödjer de andra.

Webbapplikationen som används för planering och uppföljning är skriven i <i>Angular</i>; applikationen som används ute i fältet är skriven i <i>Kotlin</i> <i>(och Java)</i>; servermjukvaran som sköter datahanteringen är skriven i <i>C#</i>, med viss funktionalitet skriven i <i>Rust</i>.`,
				},
				icon: 'recycle',
				title: 'Evolution 3',
			},
			{
				description: {
					en: `Outside of my regular duties at Botek, I'm also one of those who gladly pores over and writes documentation for a lot of our hardware and software, both for internal and external use.

To simplify further development, maintenance, and sharing of the documentation within and outside of Botek, we are currently in the process of implementing a <i>Wiki</i> system for all of this.`,
					sv: `Utöver mina vanliga arbetsuppgifter hos Botek är jag även en av de som gärna sitter med dokumentationen för mycket av vår hård- och mjukvara, både för internt och externt bruk.

För att underlätta vidareutveckling, underhåll, och delgivning av dokumentationen inom och utanför Botek håller vi just nu på med att implementera ett <i>Wiki</i>-system för allt detta.`,
				},
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
