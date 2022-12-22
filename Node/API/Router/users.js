const express = require('express')
const router = express.Router()
const user = require('../Controller/user')
router.get('/', user.getUser)
router.get('/:id', user.singleUser)
router.post('/', user.Register)

module.exports = router