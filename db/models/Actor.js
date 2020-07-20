module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
            profilePic: DataTypes.STRING,
        },
        {}
    );

    Actor.associate = function (models) {
     Actor.belongsToMany(models.Movie, {through: models.ActorMovie, as: 'movies'})
    };

    return Actor;
};
