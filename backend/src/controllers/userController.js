const User = require('../models/User');

module.exports={
    async store(req, res) {

        const { name, email, pwd, phone, birthday, cpf, sex, broker } = req.body;

        const a = await User.create({
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