// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email, pwd } = req.body;

        let user = await User.find({ email, pwd });
        
        if (!user){
            return user;
        }
        return res.json(user);
    }
};