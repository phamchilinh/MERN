const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modelNamesEnum = require('../_util/constants/modelNames').modelNamesEnum;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const modelName = modelNamesEnum.user;

module.exports = mongoose.model(modelName, userSchema);