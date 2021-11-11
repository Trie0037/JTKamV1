let nftIguana = {
  name: "Iggy",
  age: 21,
  email: "iggypop@lizzardmail.nft",
  rarity: "extremely-rare",
};

// Dot Notation
nftIguana.rarity = "extremely-wimpy";

// Bracket Notation
// nftIguana['rarity'] = 'very-scarce';

let selection = "rarity";
nftIguana[selection] = "inflated-scarcity";

console.log(nftIguana);
