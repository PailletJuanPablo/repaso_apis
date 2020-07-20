"use strict";
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        "Genre",
        {
            name: DataTypes.STRING,
        },
        {}
    );
  ;
    return Genre;
};
