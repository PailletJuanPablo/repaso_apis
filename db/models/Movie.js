"use strict";
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            title: DataTypes.STRING,
            awards: DataTypes.INTEGER(10).UNSIGNED,
            releaseDate: DataTypes.DATE,
            revenue: DataTypes.STRING,
            length: DataTypes.INTEGER(10).UNSIGNED,
            coverArt: DataTypes.STRING,
        },
        {}
    );

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre, {foreignKey: 'genreId', as: 'genre'});
        Movie.belongsToMany(models.Actor, {through: models.ActorMovie, as: 'actors'})
           
    }


 
    return Movie;
};
