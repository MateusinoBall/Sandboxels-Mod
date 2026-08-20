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
  elements.wood.reactions.air = { "chance": 0.001, element2: "died_leafs" };
    }
if (elements.plant) {
  elements.plant.reactions = elements.plant.reactions || {};
  elements.plant.reactions.air = { "chance": 0.005, element2: "died_leafs" };
}

elements.decomposer_bacteria = {
  color: "#6b8e23",
  behavior: behaviors.FLUID,
  category: "life",
  breakInto: "dead_bug",
  density: 1.1,
  state: "solid",
  stateHigh: "steam",
  tempHigh: 250,
  tempLow: -10,
  stateLow: "frozen_meat",

  reactions: {
    "acid": { element1: "radiation", element2: null },
    "died_leafs": { "chance": 0.01, element1: "mud", element2: "dirt" },
    "poisonous_sap": { "chance": 0.5, element1: "rotten_meat", element2: "poison" },
    "rotten_meat": { element1: "mud", element2: null },
    "poison": { "chance": 0.001, element1: "flower_seed", element2: null },
    "meat": { element1: "decomposer_bacteria", element2: "decomposer_bacteria" }
  }
};

elements.poisonous_sap = {
  color: "#a020f0",
  behavior: behaviors.STURDYPOWDER,
  category: "life",
  state: "solid",
  stateHigh: "poison",
  tempHigh: 125,
  tempLow: -20,
  stateLow: "amber",

  reactions: {
    "vaccine": { element1: "sap", element2: null },
    "plant": { element1: "sugar" }
    }
  };
