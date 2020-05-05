const User = require('../models/User');
const loginController = require('../controllers/login');
module.exports = {
    async store(req, res) {

        const { name, email, pwd, phone, birthday, cpf, sex, broker } = req.body;
        
        const new_cpf = cpf.replace(/[^\d]+/g,'');
        const already_email = await loginController.findUsers({email});
        //const already_cpf = await loginController.findUsers({new_cpf}); not implemented

        const already_exists = already_email[0] != null;
        
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