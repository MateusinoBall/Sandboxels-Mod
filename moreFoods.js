elements.dough.reactions = {
  ...elements.dough.reactions,
  "melted_chocolate": { elem1: "brigadeiro_dough", elem2: "null" },
  "cheese_powder": { elem1: "cheese_bread", elem2: "cheese_croissant_dough" },
  "chicken": { elem1: "coxinha_dough", elem2: "chicken_croissant_dough" },
  "yolk": { elem1: "pancakes_dough", elem2: "null" },
  "condensed_milk": { elem1: "donut_dough", elem2: "null" },
  "sauce": { elem1: "pizza_dough", elem2: "null" }
};

elements.milk.reactions = {
  ...elements.milk.reactions,
  "milk_cream": { elem1: "creamy_milk", elem2: "null" },
  "sugar": { elem1: "condensed_milk", elem2: "sweet_particles" },
  "condensed_milk": { elem1: "sweetened_milk", elem2: "sugar" },
  "sugar_water": { elem1: "milk_cream", elem2: "null" }
};

elements.brigadeiro_dough = {
  color: ["#", "#"]
