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
			en: 'Here are a few of my favourite things in life, to give a little insight into what makes me happy.',
			sv: 'Här kommer ett par av mina favoritsaker i livet, för att ge en liten inblick i vad som jag gör mig glad.',
		},
		items: [
			{
				description: {
					en: 'A literary universe created by Brandon Sanderson, with what feels like an infinite number of books and series.',
					sv: 'Ett litterärt universum skapat av Brandon Sanderson, med vad känns som oändligt många böcker och serier.',
				},
				icon: 'book-2',
				id: 'cosmere',
				title: 'Cosmere',
				url: 'https://brandonsanderson.com/books-and-art/#cosmere',
			},
			{
				description: {
					en: 'A multimedia franchise in a fantasy world, with many interesting stories and characters to take part in and get to know.',
					sv: 'En multimediafranchise i en fantasyvärld, med många intressanta berättelser och karaktärer att ta del av och lära känna.',
				},
				icon: 'device-gamepad-2',
				id: 'dragon_age',
				title: 'Dragon Age',
				url: 'https://dragonage.com',
			},
			{
				description: {
					en: 'One of my favourite game worlds, with a lot to explore and discover, often with a lot of weirdness.',
					sv: 'En av min favoritspelvärldar, med mycket att utforska och upptäcka, ofta med mycket underligheter.',
				},
				icon: 'device-gamepad-2',
				id: 'elder_scrolls',
				title: 'The Elder Scrolls',
				url: 'https://elderscrolls.bethesda.net',
			},
			{
				description: {
					en: 'A post-apocalyptic game world, with a nice mix of humour and seriousness, and a lot of interesting stories.',
					sv: 'En postapokalyptisk spelvärld, med en fin blandning av humor och allvar, och mycket många historier.',
				},
				icon: 'device-gamepad-2',
				id: 'fallout',
				title: 'Fallout',
				url: 'https://fallout.bethesda.net',
			},
			{
				description: {
					en: 'My second favourite football club, which I have followed since 2004, when Henrik Larsson started playing for them. <i lang="ca">Més que un club</i><span class="emoji" aria-hidden="true">&nbsp;💕</span>',
					sv: 'Min andra favoritklubb i fotboll, som jag följt sedan 2004, då Henrik Larsson började spela för dem. <i lang="ca">Més que un club</i><span class="emoji" aria-hidden="true">&nbsp;💕</span>',
				},
				icon: 'ball-football',
				id: 'fc_barcelona',
				title: 'FC Barcelona',
				url: 'https://fcbarcelona.com/',
			},
			{
				description: {
					en: 'As part of my interest in California, I have unfortunately also started to like the strange sport of baseball, and Dodgers is the obvious team to follow.',
					sv: 'Som en del av mitt intresse för Kalifornien så har man tyvärr även börjat gilla den underliga sporten baseball, och såklart är det då Dodgers som gäller.',
				},
				icon: 'ball-baseball',
				id: 'la_dodgers',
				title: 'LA Dodgers',
				url: 'https://dodgers.com/',
			},
			{
				description: {
					en: 'My favourite football club, which I have followed since the late 90s, when I got a David Beckham jersey; I have been obsessed since then. <i>Hated, adored, never ignored</i><span class="emoji" aria-hidden="true">&nbsp;👹</span>',
					sv: 'Min favoritklubb i fotboll, som jag följt sedan det sena 90-talet, då jag fick en David Beckham-tröja; jag har varit besatt sedan dess. <i lang="en">Hated, adored, never ignored</i><span class="emoji" aria-hidden="true">&nbsp;👹</span>',
				},
				icon: 'ball-football',
				id: 'manchester_united',
				title: 'Manchester United',
				url: 'https://www.manutd.com/',
			},
			/* {
				description: {
					en: 'One of my favourite streamers who does a lot of fun stuff, often with friends, either in the kitchen or around Austin <i>(and elsewhere)</i>.',
					sv: 'En av mina favoritstreamers som gör mycket skoj, ofta med vänner, antingen i köket eller runt om i Austin <i>(och andra ställen)</i>.',
				},
				icon: 'brand-twitch',
				id: 'nmplol',
				title: 'Nmplol',
				url: 'https://www.twitch.tv/nmplol',
			}, */
			{
				description: {
					en: 'Regular TV shows are fine, but sometimes you need something more bombastic, and then there is not much better than wrestling.',
					sv: 'Vanliga TV-serier är helt okej, men ibland behövs det något mer bombastiskt, och då finns det inte mycket bättre än wrestling.',
				},
				icon: 'swords',
				id: 'wwe',
				title: 'WWE',
				url: 'https://wwe.com/',
			},
			{
				description: {
					en: 'Marvel has always been good, and X-Men has always been my favourite group; interesting characters and good stories, often with a political undertone.',
					sv: 'Marvel har alltid varit bra, och X-Men har alltid varit min favoritgrupp; intressanta karaktärer och bra historier, ofta med en politisk underton.',
				},
				icon: 'sparkles',
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
		age: 32,
		name: 'Oscar',
		paragraph: {
			en: 'Oscar (Carl Anders) Palmér; 32 years old, born January 2nd, 1992; using he/him pronouns; a bit queer',
			sv: 'Oscar (Carl Anders) Palmér; 32 år gammal, född 2 januari 1992; använder han/honom pronomen; lite queer',
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
