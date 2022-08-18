const COURSE = require('../models/courseModel')


module.exports = {

    createCourse: async (req, res) => {
        try {
            let courseData = COURSE({
                name: req.body.name,
                imageUrl: req.body.imageUrl,
                universityName: req.body.universityName,
                facultyProfile: req.body.facultyProfile,
                duration: req.body.duration,
                price: req.body.price,
                certificateUrl: req.body.certificateUrl,
                eligibility: req.body.eligibility,
            })
            let saveData = await courseData.save()
            if (saveData) {
                res.send('Data Save Successfully')
            } else {
                res.send('Error while creating course')
            }
        } catch (err) {
            res.send(err)
        }
    },

    getAllCourse: async (req, res) => {
        try {
            let findCourse = await COURSE.find({})
            if (findCourse) {
                res.send(findCourse)
            } else {
                res.send('Data Not Found')
            }
        } catch (err) {

        }
    },

    getCourseById: async (req, res) => {
        try {
            let findCourse = await COURSE.find({ _id: req.body.courseId })
            if (findCourse) {
                res.send(findCourse)
            } else {
                res.send('Data Not Found')
            }
        } catch (err) {
            res.send(err)
        }
    },

    updateCourse: async (req, res) => {
        try {
            let courseUpdatableData = {
            }
            if (req.body.name) {
                courseUpdatableData.name = req.body.name
            }
            if (req.body.imageUrl) {
                courseUpdatableData.imageUrl = req.body.imageUrl
            }
            if (req.body.universityName) {
                courseUpdatableData.universityName = req.body.universityName
            }
            if (req.body.facultyProfile) {
                courseUpdatableData.facultyProfile = req.body.facultyProfile
            }
            if (req.body.duration) {
                courseUpdatableData.duration = req.body.duration
            }
            if (req.body.price) {
                courseUpdatableData.price = req.body.price
            }
            if (req.body.certificateUrl) {
                courseUpdatableData.certificateUrl = req.body.certificateUrl
            }
            if (req.body.eligibility) {
                courseUpdatableData.eligibility = req.body.eligibility
            }
            let result = await COURSE.findByIdAndUpdate({ _id: req.body.courseId }, { $set: courseUpdatableData }, { new: true, lean: true })
            res.send("Course has been updated successfully");
        } catch (err) {
            res.send(err);
        }
    },

    deleteCourse: async (req, res) => {
        try {
            let findCourse = await COURSE.deleteOne({ _id: req.body.courseId })
            if (findCourse) {
                res.send("Course Deleted Successfully")
            } else {
                res.send('Data Not Found')
            }
        } catch (err) {
            res.send(err)
        }
    },
}