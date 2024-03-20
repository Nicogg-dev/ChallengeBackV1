const { Schema, model } = require('mongoose');

const User = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    discount_brand: {
        type: [String],
        trim: true,
        default: [],
    },
});

User.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('User', User);