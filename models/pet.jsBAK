module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define("Pet", {
    // Giving the Pet model a name of type STRING
    name: DataTypes.STRING
  });

  Pet.associate = function(models) {
    // Associating Pet with Post
    // When an Pet is deleted, also deletes the associated Posts
    Pet.hasOne(models.Post, {
      onDelete: "cascade"
    });
  };

  return Pet;
};
