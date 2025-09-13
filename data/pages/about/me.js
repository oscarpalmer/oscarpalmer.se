import {getMarkdown} from '../../../11ty/index.js';

export default {
	biography: {
		content: getMarkdown('about/me/biography'),
		title: {
			en: 'A <i>(small)</i> biography',
			sv: 'En <i>(liten)</i> biografi',
		},
	},
	description: {
		en: 'A small biographical page about me, for those who are somehow interested in that sort of thing.',
		sv: 'En liten biografisk sida om mig, för de som konstigt nog skulle vara intresserade av det.',
	},
	favourites: {
		description: {
			en: 'Some of my favorite things.',
			sv: 'Några av mina favoritsaker.',
		},
		items: [
			{
				description: {
					en: 'A literary universe created by Brandon Sanderson, with what feels like an infinite number of books and series.',
					sv: 'Ett litterärt universum skapat av Brandon Sanderson, med vad känns som oändligt många böcker och serier.',
				},
				id: 'cosmere',
				title: 'Cosmere',
				url: 'https://brandonsanderson.com/books-and-art/#cosmere',
			},
			{
				description: {
					en: 'One of my favourite game worlds, with a lot to explore and discover, often with a lot of weirdness.',
					sv: 'En av min favoritspelvärldar, med mycket att utforska och upptäcka, ofta med mycket underligheter.',
				},
				id: 'elder_scrolls',
				title: 'The Elder Scrolls',
				url: 'https://elderscrolls.bethesda.net',
			},
			{
				description: {
					en: 'One of my favourite football clubs, which I have followed since 2004, when Henrik Larsson started playing for them. <i lang="ca">Més que un club</i><span  aria-hidden="true">&nbsp;💕</span>',
					sv: 'En av mina favoritklubbar i fotboll, som jag följt sedan 2004, då Henrik Larsson började spela för dem. <i lang="ca">Més que un club</i><span  aria-hidden="true">&nbsp;💕</span>',
				},
				id: 'fc_barcelona',
				title: 'FC Barcelona',
				url: 'https://fcbarcelona.com/',
			},
			{
				description: {
					en: 'As part of my interest in California, I have unfortunately also started to like the strange sport of baseball, and Dodgers is the obvious team to follow.',
					sv: 'Som en del av mitt intresse för Kalifornien så har man tyvärr även börjat gilla den underliga sporten baseball, och såklart är det då Dodgers som gäller.',
				},
				id: 'la_dodgers',
				title: 'LA Dodgers',
				url: 'https://dodgers.com/',
			},
			{
				description: {
					en: 'Another of my favourite football clubs, which I have followed since the late 90s, when I got a David Beckham jersey; I have been obsessed since then. <i>Hated, adored, never ignored</i><span  aria-hidden="true">&nbsp;👹</span>',
					sv: 'En annan av mina favoritklubbar i fotboll, som jag följt sedan det sena 90-talet, då jag fick en David Beckham-tröja; jag har varit besatt sedan dess. <i lang="en">Hated, adored, never ignored</i><span  aria-hidden="true">&nbsp;👹</span>',
				},
				id: 'manchester_united',
				title: 'Manchester United',
				url: 'https://www.manutd.com/',
			},
			{
				description: {
					en: "It's been a long time since I skateboarded, and I probably wasn't that good at it either, but I have continued watching most skate-related things I can find, and EA's Skate game lets me live out my fantasies.",
					sv: 'Det var länge sedan jag åkte bräda, och jag var nog inte heller så bra, men jag har fortsatt att kolla på det mesta skate-relaterade jag hittar, och EA:s Skate-spel låter mig leva ut lite fantasier.'
				},
				id: 'skateboarding',
				title: {
					en: 'Skateboarding',
					sv: 'Skateboardåkning',
				},
				url: 'https://www.ea.com/games/skate',
			},
			{
				description: {
					en: 'Marvel has always been good, and X-Men has always been my favourite group; interesting characters and good stories, often with a political undertone.',
					sv: 'Marvel har alltid varit bra, och X-Men har alltid varit min favoritgrupp; intressanta karaktärer och bra historier, ofta med en politisk underton.',
				},
				id: 'x_men',
				title: 'X-Men',
				url: 'https://marvel.com/teams-and-groups/x-men',
			},
		],
		title: {
			en: 'Some favourite things',
			sv: 'Några favoritsaker',
		},
	},
	intro: {
		content: getMarkdown('about/me/intro'),
		title: {
			en: 'An introduction',
			sv: 'En introduktion',
		},
	},
	photo: {
		alt: {
			en: `A photo of me; I have green eyes, very short hair, stubble, and I'm wearing a green shirt.`,
			sv: 'Ett foto på mig; jag har gröna ögon, väldigt kort hår, skäggstubb, och iklädd en grön skjorta.',
		},
	},
	quickie: {
		age: 33,
		name: 'Oscar',
		paragraph: {
			en: 'Oscar (Carl Anders) Palmér; 33 years old, born January 2nd, 1992; using he/him pronouns; a bit queer',
			sv: 'Oscar (Carl Anders) Palmér; 33 år gammal, född 2 januari 1992; använder han/honom pronomen; lite queer',
		},
		pronouns: {
			en: 'he/him',
			sv: 'han/honom',
		},
	},
	title: {
		en: 'About me',
		sv: 'Om mig',
	},
	url: {
		en: '/en/about/me/',
		sv: '/om/mig/',
	},
};
