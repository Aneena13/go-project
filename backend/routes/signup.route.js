const express = require('express')
const Signup = require('../models/signupSchema')

const { createUser, searchController } = require('../controllors/Controllor')

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({mssg: 'hi'})
})

router.post('/', createUser)

// router.route('/home').get(searchController.findSearchResult);

module.exports = router