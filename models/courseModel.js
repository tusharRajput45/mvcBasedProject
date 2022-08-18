const mongoose = require('mongoose')
const courseModel = mongoose.Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    universityName: {
        type: String
    },
    facultyProfile: {
        type: String
    },
    duration: {
        type: String
    },
    price: {
        type: String
    },
    certificateUrl: {
        type: String
    },
    eligibility: {
        type: String
    },
}, {
    timestamps: true
})
const COURSEMODEL = mongoose.model('course', courseModel);
module.exports = COURSEMODEL