const { Schema, model } = require('mongoose');

const Product = new Schema({
    stock: {
        type: Number,
        default: 0,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    special_price: {
        type: Number,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
    },
});

Product.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Product', Product);