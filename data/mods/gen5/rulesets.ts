export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		inherit: true,
		ruleset: [
			'Team Preview', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Item Clause',
		],
	},
	obtainablemoves: {
		inherit: true,
		banlist: [
			// Shell Smash: Clamperl Gen 5+ level-up
			// Sucker Punch: Huntail Gen 4 tutor
			'Huntail + Shell Smash + Sucker Punch',
			'Sand Stream + Sand Rush',
			'Drizzle + Swift Swim',
			'Drought + Chlorophyll',
		],
	},
	teampreview: {
		inherit: true,
		onTeamPreview() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(', shiny', '')
					.replace(/(Arceus|Gourgeist|Genesect|Pumpkaboo|Silvally|Zacian|Zamazenta|Urshifu)(-[a-zA-Z?-]+)?/g, '$1-*');
				const item = pokemon.item.includes('mail') ? 'mail' : pokemon.item ? 'item' : '';
				this.add('poke', pokemon.side.id, details, item);
			}
			this.makeRequest('teampreview');
		},
	},
};
