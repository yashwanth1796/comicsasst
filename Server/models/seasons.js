// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var SeasonsSchema = new mongoose.Schema({
    Name: {type: String},
    description: {type: String},
    Series_name: {type: String},
    // Season_name: {type: String},
    starts_on: {type: String},
    ends_on: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// Export the Mongoose model
module.exports = mongoose.model('seasons', SeasonsSchema);
