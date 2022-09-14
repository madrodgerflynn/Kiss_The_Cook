const { Recipe } = require("../Models");

const recipeData = [
  {
    title: "Spicy Bread & Butter Dill Pickles",
    image:
      "https://docs.google.com/drawings/d/e/2PACX-1vROyCNLlC1NEqaXzBDaKGnLTpu0bX8cmqKQE04C-nHL2zjmfPmfZwzWxJEU5wnx2jiDLlQo1vY28ILJ/pub?w=765&h=489",
    ingredients: [
      "3-4 cucumbers - thinly sliced",
      "1 cup rice vinegar",
      "1 cup water",
      "1 Tbspn salt",
      "1/2 cup sugar",
      "Fresh dill to taste - roughly chopped",
      "2-4 fresh garlic cloves - smashed",
      "1/4 tspn chili flakes",
    ],
    recipe_steps: [
      "Add the vinegar, water, salt, and sugar to a bowl. Mix until fully dissolved.",
      "Fill mason jars with cucumber slices.",
      "Add 1-2 smashed garlic cloves, dill, and 1/4 tspn chili flakes to each mason jar.",
      "Pour vinegar mixture over cucumbers in jars. Fill until 1/2 inch of space remains at the top of the jar.",
      "Seal jars with lids and store in the refridgerator. Allow to sit at least 1 hour before enjoying.",
    ],
    user_id: 1,
  },
  {
    title: "Jalapeno Cheese Muffins",
    image: null,
    ingredients: [
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
    ],
    recipe_steps: [
      "Preheat the oven to 375 degrees F.",
      "In a large mixing bowl, combine flour, sugar, baking powder, salt, pepper, garlic, parmesan, cheddar cheese, and pickled jalapenos. Set aside.",
      "In a separate bowl, mix together egg, yogurt, milk, pickling liquid, and melted butter.",
      "Pour contents of wet bowl into dry bowl. Mix until just combined. Do not over mix.",
      "Scoop into lined muffin pan. Bake 25-30 minutes until tops are golden.",
    ],
    user_id: 1,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
