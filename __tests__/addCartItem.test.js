import addCartItem from '../lib/addCartItem';

describe('Add item to cart', () => {
	const productToAdd = {
		isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
		title: "Henri Potier à l'école des sorciers",
		price: 35,
		cover: 'http://henri-potier.xebia.fr/hp0.jpg',
		synopsis: [
			"Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
			"Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
			"Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine.",
		],
	};
	const cartItems = [
		{
			isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
			title: 'Henri Potier et la Chambre des secrets',
			price: 30,
			cover: 'http://henri-potier.xebia.fr/hp1.jpg',
			synopsis: [
				"Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d'ignorer cet avertissement. Le jour de son départ pour l'école, il se retrouve bloqué avec Ron Weasley à la gare de King's Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.",
				"Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d'un élève moldu de l'école. Dès la première attaque, un message sanglant apparaît sur l'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l'identité du coupable et protéger les élèves contre de nouvelles agressions.",
			],
			quantity: 2,
			totalPrice: 60,
		},
		{
			isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
			title: "Henri Potier et le Prisonnier d'Azkaban",
			price: 30,
			cover: 'http://henri-potier.xebia.fr/hp2.jpg',
			synopsis: [
				"Durant l'été, pour son treizième anniversaire, Henri reçoit plusieurs cartes de ses amis, notamment une lettre de Ron qui lui écrit d'Égypte, où il passe ses vacances avec sa famille. Une lettre du professeur McGonagall, directrice adjointe de Poudlard, lui informe que les élèves de troisième année auront la possibilité de visiter le village de Pré-au-Lard.",
				"Le lendemain, les informations télévisées moldues annoncent l'évasion d'un très dangereux prisonnier du nom de Sirius Black et l'oncle et la tante de Henri s'inquiètent légèrement pour eux-mêmes. Plus tard, ils annoncent à Henri que la tante Marge séjournera une semaine chez eux, à Privet Drive. La tante Marge provoque Henri en traitant son père défunt d'ancien ivrogne. Henri s'énerve, perd le contrôle de sa magie et fait accidentellement gonfler la tante Marge comme un ballon. Alors que son oncle, furieux, ordonne à Henri de rendre à Marge son apparence normale, le garçon refuse et prend la fuite en pleine nuit, emportant sa valise et sa chouette Edwige.",
				"Plus tard, sur le Chemin de traverse, Henri apprend avec surprise que Sirius Black s'est en fait échappé d'Azkaban pour le retrouver, lui. Il semblerait que l'homme veuille tuer Henri afin de permettre à Lord Voldemort, son maître, de retrouver l'étendue de son pouvoir.",
			],
			quantity: 1,
			totalPrice: 30,
		},
		{
			isbn: 'c30968db-cb1d-442e-ad0f-80e37c077f89',
			title: 'Henri Potier et la Coupe de feu',
			price: 29,
			cover: 'http://henri-potier.xebia.fr/hp3.jpg',
			synopsis: [
				"Juste avant d'assister à la coupe du Monde de Quidditch opposant les équipes d'Irlande et de Bulgarie, Henri Potier fait un rêve étrange dans lequel il est témoin du meurtre d'un vieux jardinier moldu par Voldemort, alors que le jardinier surprenait une conversation au sujet de Henri.",
				'Au camping de la coupe du Monde, juste après le match, des mangemorts font irruption en pleine nuit et provoquent la panique parmi les supporters, en faisant apparaître la Marque des Ténèbres dans le ciel, et annonçant le retour du mage noir.',
				"Henri passe le reste des vacances d'été au Terrier sous haute surveillance, et entame une nouvelle année à Poudlard, annoncée comme une véritable année de compétition. En effet, l'école accueille exceptionnellement un grand évènement : le Tournoi des Trois Sorciers. À cette occasion, Poudlard accueille également des délégations de deux autres écoles de magie : celles de Durmstrang et de Beauxbâtons. Contre toute attente, alors que les trois champions sont choisis par la Coupe de Feu (Viktor Krum pour Durmstrang, Fleur Delacour pour Beauxbâtons et Cedric Diggory pour Poudlard), un deuxième champion de Poudlard est désigné, et il s'agit de Henri Potier.",
			],
			quantity: 1,
			totalPrice: 29,
		},
	];
	const cartItems2 = [
		{
			isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
			title: 'Henri Potier et la Chambre des secrets',
			price: 30,
			cover: 'http://henri-potier.xebia.fr/hp1.jpg',
			synopsis: [
				"Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d'ignorer cet avertissement. Le jour de son départ pour l'école, il se retrouve bloqué avec Ron Weasley à la gare de King's Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.",
				"Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d'un élève moldu de l'école. Dès la première attaque, un message sanglant apparaît sur l'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l'identité du coupable et protéger les élèves contre de nouvelles agressions.",
			],
			quantity: 2,
			totalPrice: 60,
		},
		{
			isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
			title: "Henri Potier et le Prisonnier d'Azkaban",
			price: 30,
			cover: 'http://henri-potier.xebia.fr/hp2.jpg',
			synopsis: [
				"Durant l'été, pour son treizième anniversaire, Henri reçoit plusieurs cartes de ses amis, notamment une lettre de Ron qui lui écrit d'Égypte, où il passe ses vacances avec sa famille. Une lettre du professeur McGonagall, directrice adjointe de Poudlard, lui informe que les élèves de troisième année auront la possibilité de visiter le village de Pré-au-Lard.",
				"Le lendemain, les informations télévisées moldues annoncent l'évasion d'un très dangereux prisonnier du nom de Sirius Black et l'oncle et la tante de Henri s'inquiètent légèrement pour eux-mêmes. Plus tard, ils annoncent à Henri que la tante Marge séjournera une semaine chez eux, à Privet Drive. La tante Marge provoque Henri en traitant son père défunt d'ancien ivrogne. Henri s'énerve, perd le contrôle de sa magie et fait accidentellement gonfler la tante Marge comme un ballon. Alors que son oncle, furieux, ordonne à Henri de rendre à Marge son apparence normale, le garçon refuse et prend la fuite en pleine nuit, emportant sa valise et sa chouette Edwige.",
				"Plus tard, sur le Chemin de traverse, Henri apprend avec surprise que Sirius Black s'est en fait échappé d'Azkaban pour le retrouver, lui. Il semblerait que l'homme veuille tuer Henri afin de permettre à Lord Voldemort, son maître, de retrouver l'étendue de son pouvoir.",
			],
			quantity: 1,
			totalPrice: 30,
		},
		{
			isbn: 'c30968db-cb1d-442e-ad0f-80e37c077f89',
			title: 'Henri Potier et la Coupe de feu',
			price: 29,
			cover: 'http://henri-potier.xebia.fr/hp3.jpg',
			synopsis: [
				"Juste avant d'assister à la coupe du Monde de Quidditch opposant les équipes d'Irlande et de Bulgarie, Henri Potier fait un rêve étrange dans lequel il est témoin du meurtre d'un vieux jardinier moldu par Voldemort, alors que le jardinier surprenait une conversation au sujet de Henri.",
				'Au camping de la coupe du Monde, juste après le match, des mangemorts font irruption en pleine nuit et provoquent la panique parmi les supporters, en faisant apparaître la Marque des Ténèbres dans le ciel, et annonçant le retour du mage noir.',
				"Henri passe le reste des vacances d'été au Terrier sous haute surveillance, et entame une nouvelle année à Poudlard, annoncée comme une véritable année de compétition. En effet, l'école accueille exceptionnellement un grand évènement : le Tournoi des Trois Sorciers. À cette occasion, Poudlard accueille également des délégations de deux autres écoles de magie : celles de Durmstrang et de Beauxbâtons. Contre toute attente, alors que les trois champions sont choisis par la Coupe de Feu (Viktor Krum pour Durmstrang, Fleur Delacour pour Beauxbâtons et Cedric Diggory pour Poudlard), un deuxième champion de Poudlard est désigné, et il s'agit de Henri Potier.",
			],
			quantity: 1,
			totalPrice: 29,
		},
		{
			isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
			title: "Henri Potier à l'école des sorciers",
			price: 35,
			cover: 'http://henri-potier.xebia.fr/hp0.jpg',
			synopsis: [
				"Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
				"Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
				"Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine.",
			],
			quantity: 1,
			totalPrice: 35,
		},
	];

	it('should return an array of objects with all correct keys', () => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		expect(newCartItems).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					isbn: expect.any(String),
					title: expect.any(String),
					price: expect.any(Number),
					cover: expect.any(String),
					synopsis: expect.any(Array),
					quantity: expect.any(Number),
					totalPrice: expect.any(Number),
				}),
			])
		);
	});

	it('should add a new item to cart if it does not already exist, with a quantity of one and a total price of the item price', () => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		expect.assertions(3);
		expect(newCartItems[3].isbn).toBe('c8fabf68-8374-48fe-a7ea-a00ccd07afff');
		expect(newCartItems[3].quantity).toBe(1);
		expect(newCartItems[3].totalPrice).toBe(35);
	});

	it('should increase the quantity and the price of the item if it already exists in the cart', () => {
		const newCartItems2 = addCartItem(cartItems2, productToAdd);
		expect.assertions(3);
		expect(newCartItems2[3].isbn).toBe('c8fabf68-8374-48fe-a7ea-a00ccd07afff');
		expect(newCartItems2[3].quantity).toBe(2);
		expect(newCartItems2[3].totalPrice).toBe(70);
	});
});
