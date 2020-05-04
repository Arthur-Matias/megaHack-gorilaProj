const User = require('../models/User');
const loginController = require('../controllers/login');
module.exports = {
    async store(req, res) {

        const { name, email, pwd, phone, birthday, cpf, sex, broker } = req.body;
        
        const already_data = await loginController.findUsers({email})

        const already_exists = already_data[0] != null

        var a = null

        if (already_exists){
            const body_returned = req.body
            body_returned._id = null
            delete body_returned.pwd
            delete body_returned.cpf
            return res.json(body_returned)

        }
        else{
    
            a = await User.create({
                name,
                email,
                pwd,
                phone,
                birthday,
                cpf: cpf.replace(/[^\d]+/g,''),
                sex,
                broker
            });
            return res.json(a);

        }
    }
}