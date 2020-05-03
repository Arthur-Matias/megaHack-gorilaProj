const User = require('../models/User')

module.exports = {
    async show(req,res){

        const users = await User.find({ broker: false }).limit(6);
        
        return res.json(users);
    }
}