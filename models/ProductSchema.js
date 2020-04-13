let mongoose = require('mongoose');
//define a mongoose schema to use with database
let Schema = mongoose.Schema;

let ProductSchema = new Schema(
    {
        productID: Number,
        productName: String,
        price: Number,
        quantity: Number
    }
);

//export the model schema
module.exports = mongoose.model('product', ProductSchema);