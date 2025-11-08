const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image:{
        type:String,
    },
    price: {
        type: Number,
    },
    location:{
        type: String,
    },
    country:{
        type: String,
    }

}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
