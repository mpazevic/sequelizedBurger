const db = require('../models/index.js');
// Query to select all burgers
const selectAllBurgers = (req, res) => {
  db.Burger.findAll({}).then((burgerData) => {
      res.render('index', { burgers: burgerData });
  });
};
// Query to post a burger, and redirect the user to the index
const postBurger = (req, res) => {
    const newBurger = req.body.burger_name;
    db.Burger.create({
        burger_name: newBurger,
        devoured: false
    }).then((data) => {
        res.redirect('/index');
    })
}
// Update a burger's value, and redirect the user to the index
const updateBurger = (req, res) => {
    const burgerId = req.body.id;
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: burgerId
        }
    }).then((data) =>{
        res.redirect('/index');
    });
};

module.exports = {
    selectAllBurgers: selectAllBurgers,
    postBurger: postBurger,
    updateBurger: updateBurger
}
