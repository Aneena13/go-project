const signup = require('../models/signupSchema')

const createUser = async (req, res) => {
    const {names, email, password, phone, location} = req.body

    try {
      const signup = await signup.create({names, email, password, phone, location})
      res.status(200).json(signup) 
    } catch (error){
      res.status(400).json({error: error.message})
    }
} 

var findSearchResult = async(req, res) => {

  var result = await searchService.findSearchResult(req.params.source, req.params.destination);

  if(result) {
    res.send({ "status" : true, "data": result});
  }
  else{
    res.send({"status": false, "data": "user not found"});
  }

}

module.exports = {
  createUser,
  findSearchResult
};