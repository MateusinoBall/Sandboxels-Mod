elements.died_leafs = {
  color: "#8b5a2b",
  behavior: behaviors.POWDER,
  category: "life",
  density: 1.2,
  state: "solid",
  stateHigh: "fire",
  tempHigh: 350,
  desc: "died leafs waiting to be fertilized",

  reactions: {
    "decomposer_bacteria": { "chance": 0.01, element1: "mud", element2: "dirt" },
    "life_worm": { "chance": 0.9, element1: "super_fertilizer", element2: "water" },
    "acid": { element1: "carbon_dioxide", element2: null }
  }
};


if (elements.wood) {
  elements.wood.reactions = elements.wood.reactions || {};
  elements.wood.reactions.air = { "chance": 0.001, element2: "died_leafs" }

if (elements.plant) {
  elements.plant.reactions = elements.plant.reactions || {};
  elements.plant.reactions.air = { "chance": 0.005, element2: "died_leafs" }
