// Created by Mateusino Ball.
runAfterLoad(function() {
  console.log("Thanks for using building_blocks.js! - Mateusino Ball")
})

elements.cobblestone = {
color: ["#7a7a7a", "#6b6b6b", "#5c5c5c"],
behavior: behaviors.POWDER,
category: "land",
breakInto: "gravel",
  hardness: 0.5,
  state: "solid",
  stateHigh: "polished_stone",
tempHigh: 200,

reactions: {
"plasma": { elem1: "lava", elem2: "null" },
"grass": { elem1: "dirt", elem2: "null" }
};

elements.polished_stone = {
  color: ["#ced5d6", "#a3ced4"],
  behavior: behaviors.WALL,
  category: "solids",
  breakInto: "polished_stone_fragments",
  hardness: 0.3,
  conduct: 0.1,
  state: "solid"
  stateHigh: "lava",
  tempHigh: 1300,

  reactions: {
  "plasma": { elem1: "lava", elem2: "null" },
  "acid": { elem1: "rock_wall", elem2: "neutral_acid" }
};

elements.polished_stone_fragments = {
  color: ["#ced5d6", "#616161"],
  behavior: behaviors.POWDER,
  category: ""powders,
  breakInto: ["stone", "carbon_dioxide"],
  hardness: 0.3,
  state: "solid",
  stateHigh: "lava",
  tempHigh: 1300,

  reactions: {
  "god_ray": { elem1: "polished_stone", elem2: "null" },
  "bless": { elem1: "polished_stone", elem2: "null" }
  };

elements.lava = {
  color: ["#fcdf03", "#"]
