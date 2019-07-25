const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BunSchema = new Schema({
    bakeryId: {
        type:String,
        required:true,
    },
    ingredients: {
        type:String,
        required:true,
    },
    availibility: {
        type:Boolean,
        required:false,
    },
    price: {
        type:Number,
        required:true,
    },
    name: {
        type:String,
        required:true,
    }
})
const Bun = mongoose.model('bun', BunSchema);

module.exports = Bun;