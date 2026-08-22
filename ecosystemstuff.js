elements.dead_leafs = {
  color: "#8b5a2b",
  behavior: behaviors.POWDER,
  category: "life",
  density: 1.2,
  state: "solid",
  stateHigh: "fire",
  tempHigh: 350,
  desc: "dead leafs waiting to be fertilized",

  reactions: {
    "decomposer_bacteria": { "chance": 0.01, element1: "mud", element2: "dirt" },
    "life_worm": { "chance": 0.9, element1: "super_fertilizer", element2: "water" },
    "acid": { element1: "carbon_dioxide", element2: null }
  }
};


if (elements.wood) {
  elements.wood.reactions = elements.wood.reactions || {};
  elements.wood.reactions.air = { "chance": 0.001, element2: "dead_leafs" };
    }
if (elements.plant) {
  elements.plant.reactions = elements.plant.reactions || {};
  elements.plant.reactions.air = { "chance": 0.005, element2: "dead_leafs" };
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
    "dead_leafs": { "chance": 0.01, element1: "mud", element2: "dirt" },
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
  state: "liquid",
  stateHigh: "poison",
  tempHigh: 125,
  tempLow: -20,
  stateLow: "amber",

  reactions: {
    "vaccine": { element1: "sap", element2: null },
    "plant": { element1: "sugar" }
    }
  };

elements.life_worm = {
  color: "#d2b48c",
  behavior: [
    "XX|XX|XX|",
    "M1 AND CRWL|XX|M2 AND CRWL",
    "XX|XX|XX"
    ],
  category: "life",
  state: "solid",
  stateHigh: "meat",
  tempHigh: 100,
  tempLow: -5,
  stateLow: "frozen_meat",

  reactions: {
    "acid": { element1: "radiation", "chance": 0.01, element2: "ant" },
    "dirt": { "chance": 0.9, element1: "super_fertilizer", "chance": 0.1, element2: "mud" },
    "dead_leafs": { "chance": 0.75, element1: "mud" },
    "milk": { "chance": 0.01, element1: "life_worm" },
    "caramel": { "chance": 0.02, element1: "life_worm"},
    "poisonous_sap": { element1: "autumn_sapling", element2: null }
    }
};

elements.super_fertilizer = {
  color: "#4a3b32",
  behavior: behaviors.POWDER,
  category: "life",
  breakInto: ["dirt", "mud"],
  density: 1.4,
  state: "solid",
  stateHigh: "dirt",
  tempHigh: 300,

  reactions: {
    "plasma_sakura_sapling": { "chance": 0.9, element1: "plasma_sakura_branch" },
    "willow_of_the_souls_sapling": { "chance": 0.9, element1: "willow_of_the_souls_branch" },
    "autumn_sapling": { "chance": 0.9, element1: "autumn_branch" }
      }
  };

elements.leech = {
  color: "#4a0000",
  behavior: behaviors.FLUID,
  category: "life",
  breakInto: "blood",
  density: 1.3,
  state: "solid",
  stateHigh: "blood",
  tempHigh: 150,

  reactions: {
    "life_worm": { element1: "blood" },
    "blood": { "chance": 0.05, element1: "leech" },
    "body": { element1: "blood" }
  }
      };

elements.plasma_sakura_sapling = {
  color: "#ff69b4",
  behavior: behaviors.POWDER,
  category: "life",
  state: "solid",
  stateHigh: "ash",
  tempHigh: 400,

  reactions: {
    "super_fertilizer": { "chance": 0.9, element1: "plasma_sakura_branch"},
    "grass": { "chance": 0.5, element1: "plasma_sakura_branch" },
    "dirt": { "chance": 0.5, element1: "plasma_sakura_branch" },
    "mud": { "chance": 0.6, element1: "plasma_sakura_branch" }
      }
    };

elements.plasma_sakura_branch = {
  color: "#2f4f4f",
  behavior: [
  CRWL:plasma_sakura_leafs%10|FX:plasma_sakura_branch%15|CRWL:plasma_sakura_leafs%10,
  XX|XX|XX,
  CRWL:roots%5|FX:fiber%3|CRWL:roots%5
    ],
  category: "life",
