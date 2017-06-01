// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var SeriesSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    Series_id:{type: String},
    Series_name: {type: String},
    created_by: {type: String},
    created_at: {type: Date,default: Date.now},
    updated_at: {type: Date,default: Date.now},
});

// Export the Mongoose model
module.exports = mongoose.model('series', SeriesSchema);
