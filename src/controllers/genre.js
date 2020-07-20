const { Genre, Actor } = require('../../db/models');

const listAll = async (req, res) => {
    try {
        const collection = await Movie.findAll();
        const actors = await Actor.findAll();
        return res.json(collection)
    } catch (error) {
        return res.status(500).json({error: true})
    }
}


const findOne = async (req, res) => {
    try {
        const genre = await Genre.findByPk(req.params.id);
        if(!genre) {
            return res.status(404).json({msg: 'No se encontró el género'})
        }
        return res.json(genre)
    } catch (error) {
        return res.status(500).json({error: true})
    }
}

const createOne = async (req, res) => {


}

const updateOne = async(req, res) => {

}

const destroyOne = async(req, res) => {

}

module.exports = {listAll, findOne, destroyOne, createOne, updateOne}