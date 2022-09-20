const { Recipe } = require("../Models");

const recipeData = [
  {
    title: "Spicy Bread & Butter Dill Pickles",
    image:
      "https://docs.google.com/drawings/d/e/2PACX-1vROyCNLlC1NEqaXzBDaKGnLTpu0bX8cmqKQE04C-nHL2zjmfPmfZwzWxJEU5wnx2jiDLlQo1vY28ILJ/pub?w=765&h=489",
    ingredients: JSON.stringify([
      "3-4 cucumbers - thinly sliced",
      "1 cup rice vinegar",
      "1 cup water",
      "1 Tbspn salt",
      "1/2 cup sugar",
      "Fresh dill to taste - roughly chopped",
      "2-4 fresh garlic cloves - smashed",
      "1/4 tspn chili flakes",
    ]),
    recipe_steps: JSON.stringify([
      "Add the vinegar, water, salt, and sugar to a bowl. Mix until fully dissolved.",
      "Fill mason jars with cucumber slices.",
      "Add 1-2 smashed garlic cloves, dill, and 1/4 tspn chili flakes to each mason jar.",
      "Pour vinegar mixture over cucumbers in jars. Fill until 1/2 inch of space remains at the top of the jar.",
      "Seal jars with lids and store in the refridgerator. Allow to sit at least 1 hour before enjoying.",
    ]),
    user_id: "1",
  },
  {
    title: "Jalapeno Cheese Muffins",
    image: null,
    ingredients: JSON.stringify([
      "2 cups flour",
      "1 1/2 Tbspn sugar",
      "2 tspn baking powder",
      "1 1/2 tspn salt",
      "1 tspn pepper",
      "1 1/2 tspn garlic powder",
      "1/2 cup grated parmesan",
      "1 1/2 cup shredded cheddar cheese",
      "1 1/2 cup pickled jalapenos - drained and diced",
      "1 egg",
      "1/2 cup plain greek yogurt",
      "3/4 cup whole milk",
      "1/8 cup jalapeno pickling liquid",
      "1/2 cup (1 stick) melted butter",
    ]),
    recipe_steps: JSON.stringify([
      "Preheat the oven to 375 degrees F.",
      "In a large mixing bowl, combine flour, sugar, baking powder, salt, pepper, garlic, parmesan, cheddar cheese, and pickled jalapenos. Set aside.",
      "In a separate bowl, mix together egg, yogurt, milk, pickling liquid, and melted butter.",
      "Pour contents of wet bowl into dry bowl. Mix until just combined. Do not over mix.",
      "Scoop into lined muffin pan. Bake 25-30 minutes until tops are golden.",
    ]),
    user_id: "1",
  },
  {
    title: "Pumpkin Chocolate Chip Bread",
    image:
      "https://docs.google.com/drawings/d/e/2PACX-1vRsibX6YGJVRiGutVoyIZhfMoNprJVcnU82HVeBFmWOT5LPqEgDcc7vmwQVpbkaIBYBV9Gdrz-iQz5h/pub?w=593&h=422",
    ingredients: JSON.stringify([
      "2 cups flour",
      "1 cup brown sugar",
      "1 tblspn baking powder",
      "1 tsp salt",
      "1/4 tsp salt",
      "1/4 tsp baking soda",
      "1/4 tsp nutmeg",
      "1/8 tsp ginger or ground cloves",
      "1 cup canned pumpkin",
      "1/2 cup milk",
      "2 eggs",
      "1/3 cup butter",
      "1/2 bag of chocolate chips",
    ]),
    recipe_steps: JSON.stringify([
      "In a large bowl, combine 1 cup of flour, brown sugar, baking powder, nutmeg and ginger.",
      "Add pumpkin, milk, eggs and butter.",
      "Beat on low speed until blended, then high speed for 2 minutes.",
      "Add remaining flour and beat well.",
      "Add chocolate chips.",
      "Bake at 350 for 60-65 minutes.",
      "Cool 10 minutes on wire rack.",
    ]),
    user_id: "2",
  },
  {
    title: "Tomato and Goat Cheese Dip",
    image:
      "https://docs.google.com/drawings/d/e/2PACX-1vQ8ObZwHsFSQkMa6vsMMjWmTbL1t1MMwWvFX_R2_t07KDi0y5ecCNNyioq0b_uPagWZckD6Ji7WTeze/pub?w=962&h=621",
    ingredients: JSON.stringify([
      "1 tblspn miced garlic",
      "1/2 cup olive oil",
      "2 lbs cherry tomatoes",
      "4 oz. goat cheese",
      "1/2 cup fresh basil, slivered",
    ]),
    recipe_steps: JSON.stringify([
      "Steep garlic in olive oil at least 1/2 hour.",
      "Preheat oven to 400 degrees.",
      "Wash tomatoes and cut in half or quarters.",
      "Put tomatoes in a shallow baking dish, pour oil and garlic over and toss lightly.",
      "Bake 10 minutes.",
      "Sprinkle chunks of cheese and slivered basil over tomatoes and stir gently.",
      "Serve over crackers or bread.",
    ]),
    user_id: "2",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
