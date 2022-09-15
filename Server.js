const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// creates the sessions table for us automatically
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const User = require("./Models/users");
// const Recipe = require("./Models/recipes");

const routes = require("./Controller");
const sequelize = require("./Config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
