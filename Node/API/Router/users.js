const express = require('express')
const router = express.Router()
const user = require('../Controller/user')
router.get('/', user.getUser)
router.get('/:id', user.singleUser)
router.delete('/:id', user.deleteUser)
router.put('/:id', user.updateUser)
router.post('/', user.Register)
router.post('/login', user.Login)


module.exports = router