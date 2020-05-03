// index, show, store, update, destroy
const User = require('../models/User');

async function findUsers(data_to_find) {
    return await User.find(data_to_find)
}


module.exports = {
    async store(req, res){
        const { email, pwd } = req.body;

        //let user = await User.find({ email, pwd });
        let user = await findUsers({email,pwd});
        console.log(user)
        if (!user){
            return user;
        }
        return res.json(user);
    },
    findUsers
};