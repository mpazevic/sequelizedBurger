module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    //Create burger name
    burger_name: DataTypes.STRING,
    //Create devoured status
    devoured: DataTypes.BOOLEAN,
    //Attach a creation time to the variable
    date: DataTypes.DATE
  }, {
    timestamps: false
  });

  return Burger;
};
