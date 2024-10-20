const mongoose = require('mongoose')

var conferenceSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Acronym: {
        type: String,
        required: true
    },
    Source: {
        type: String,
        required: true
    },
    Rank: {
        type: String,
        required: true
    },
    SourceRank : {
        type : JSON
    },
    Note: {
        type: String,
    },
    DBLP: {
        type: String,
    },
    PrimaryFoR: {
        type: Array,
    },
    Comments: {
        type: String,
    },
    AverageRating: {
        type: String,
    },
    Links: {
        type: Array
    },
    ConferenceDate: {
        type: Array
    },
    SubmissonDate: {
        type: Array
    },
    NotificationDate: {
        type: Array
    },
    CameraReady: {
        type: Array
    },
    CallForPaper: {
        type: String
    },
    Location: {
        type: String
    },
    Type: {
        type: String
    }

}, 
{ 
    timestamps: true 
})

module.exports = mongoose.model('Conference', conferenceSchema);


