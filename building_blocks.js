// Created by Mateusino Ball.
runAfterLoad(function() {
  console.log("Thanks for using building_blocks.js! - Mateusino Ball")
})

elements.cobblestone = {
color: ["#7a7a7a", "#6b6b6b", "#5c5c5c"],
behavior: behaviors.POWDER,
category: "land",
breakInto: "gravel",
state: "solid",
stateHigh: "polished_stone",
tempHigh: 250,
hardness: 0.5,

reactions: {
"plasma": { elem1: "magma", elem2: "null" },
"grass": { elem1: "dirt", elem2: "null" }
};


