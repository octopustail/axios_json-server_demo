const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
        title: {type: String, required: true},
        post: {type: String},
        director: {type: String},
        date: {type: String},
        score: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Movie',MovieSchema);