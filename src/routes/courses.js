const { Router } = require('express')
const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')


router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:slug', courseController.show)
router.get('/', courseController.show)


module.exports = router

