// const router = require("express").Router();
// const { recipes, users } = require("../Models");

// router.get("/", async (req, res) => {
//   try {
//     const dbRecipeData = await recipes.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ["filename", "description"],
//         },
//       ],
//     });

//     const allRecipes = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render("homepage", {
//       galleries,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
