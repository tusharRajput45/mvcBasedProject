const routes = require('express').Router()
const couseControllers = require('../controllers/courseController')

//createCourse
routes.post('/createCourse', couseControllers.createCourse)

//getAllCourse
routes.get('/getAllCourse', couseControllers.getAllCourse)

//getCourseById
routes.post('/getCourseById', couseControllers.getCourseById)

//deleteCourse
routes.post('/deleteCourse', couseControllers.deleteCourse)

//updateCourse
routes.post('/updateCourse', couseControllers.updateCourse)

module.exports = routes