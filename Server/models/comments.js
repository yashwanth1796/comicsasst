// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var ComicsSchema = new mongoose.Schema({
    Comic_id: {type: String},
    Comment: {type: String},
    User_name: {type: String},
    posted_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now},

});

// Export the Mongoose model
module.exports = mongoose.model('comments', ComicsSchema);
