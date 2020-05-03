const User = require('../models/User')

module.exports = {
    async show(req,res){

        const brokers = await User.find({ broker: true }).limit(6);

        return res.json(brokers);
    }
}