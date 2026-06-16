// data/pokemon.js
// This array stands in for a database. In Unit 2 you'll swap this out
// for real database queries, but the shape of each object can stay the same.
// Every item shares the SAME attributes -> that's what the rubric wants.

const ARTWORK = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const pokemon = [
  {
    slug: "blaziken",
    name: "Blaziken",
    pokedexNumber: 257,
    types: ["fire", "fighting"],
    category: "Blaze Pokémon",
    teamRole: "Lead Sweeper",
    ability: "Speed Boost",
    signatureMove: "Blaze Kick",
    height: "1.9 m",
    weight: "52.0 kg",
    image: ARTWORK(257),
    description:
      "The opening statement of the team. With Speed Boost stacking every turn, Blaziken outpaces the Elite Four's frailer leads and breaks them before they set up. Equal parts firepower and footwork.",
  },
  {
    slug: "metagross",
    name: "Metagross",
    pokedexNumber: 376,
    types: ["steel", "psychic"],
    category: "Iron Leg Pokémon",
    teamRole: "Defensive Pivot",
    ability: "Clear Body",
    signatureMove: "Meteor Mash",
    height: "1.6 m",
    weight: "550.0 kg",
    image: ARTWORK(376),
    description:
      "Four brains, one strategy. Metagross soaks hits the sweepers can't, resists a huge chunk of the type chart, and pivots momentum back in your favor with a Meteor Mash that loves to raise its own Attack.",
  },
  {
    slug: "gengar",
    name: "Gengar",
    pokedexNumber: 94,
    types: ["ghost", "poison"],
    category: "Shadow Pokémon",
    teamRole: "Special Sweeper",
    ability: "Levitate",
    signatureMove: "Shadow Ball",
    height: "1.5 m",
    weight: "40.5 kg",
    image: ARTWORK(94),
    description:
      "Speed, immunity to Ground, and a Shadow Ball that punishes the Psychic-heavy back half of most Elite Four rosters. Gengar is the answer when something needs to disappear right now.",
  },
  {
    slug: "salamence",
    name: "Salamence",
    pokedexNumber: 373,
    types: ["dragon", "flying"],
    category: "Dragon Pokémon",
    teamRole: "Late-Game Cleaner",
    ability: "Intimidate",
    signatureMove: "Dragon Claw",
    height: "1.5 m",
    weight: "102.6 kg",
    image: ARTWORK(373),
    description:
      "Held in reserve until the opposing walls are softened. Intimidate blunts physical attackers on entry, and once the board is clear Salamence sweeps what's left with raw Dragon power.",
  },
  {
    slug: "gardevoir",
    name: "Gardevoir",
    pokedexNumber: 282,
    types: ["psychic", "fairy"],
    category: "Embrace Pokémon",
    teamRole: "Support & Special Attacker",
    ability: "Synchronize",
    signatureMove: "Psychic",
    height: "1.6 m",
    weight: "48.4 kg",
    image: ARTWORK(282),
    description:
      "The glue of the squad. Fairy typing walls the Dragon-types the Champion loves to bring, while a strong special movepool means Gardevoir can attack or support depending on what the matchup demands.",
  },
  {
    slug: "snorlax",
    name: "Snorlax",
    pokedexNumber: 143,
    types: ["normal"],
    category: "Sleeping Pokémon",
    teamRole: "Defensive Wall",
    ability: "Thick Fat",
    signatureMove: "Body Slam",
    height: "2.1 m",
    weight: "460.0 kg",
    image: ARTWORK(143),
    description:
      "The insurance policy. Enormous bulk and Thick Fat let Snorlax stall out the hardest hitters, recover, and grind long matches into a win. Hard to move, harder to knock out.",
  },
];

export default pokemon;
