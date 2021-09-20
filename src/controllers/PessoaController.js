const Pessoas = require('../models/Pessoas');

module.exports = {
    async index(req, res) {
        const pessoas = await Pessoas.findAll();

        return res.json(pessoas);
    },

    async store(req, res) {
        const { id } = req.params;
        const { name, surname, email, zip_code, state, city, street, doc_number, cellphone, nationality } = req.body;

        let pessoas = ""
        if (id) {
            Pessoas.update(
                {
                    'name': name,
                    'surname': surname,
                    'email': email,
                    'zip_code': zip_code,
                    'state': state,
                    'city': city,
                    'street': street,
                    'doc_number': doc_number,
                    'cellphone': cellphone,
                    'nationality': nationality
                },
                { where: { id: id } }
            );
        } else {
            try {
                const pessoas = await Pessoas.create({
                    'name': name,
                    'surname': surname,
                    'email': email,
                    'zip_code': zip_code,
                    'state': state,
                    'city': city,
                    'street': street,
                    'doc_number': doc_number,
                    'cellphone': cellphone,
                    'nationality': nationality
                });
            } catch (error) {
                if (error.name === "SequelizeUniqueConstraintError") {
                    return res.json("CPF já existe")
                } else {
                    return res.json(error);
                }
            }

        }
        return res.json(pessoas);
    },

    async show(req, res) {

        const { id } = req.params;

        const pessoas = await Pessoas.findByPk(id);

        return res.json(pessoas);
    },

    async destroy(req, res) {
        const { id } = req.params;

        Pessoas.destroy({
            where: {
                id: id
            }
        });
        return res.json('ok');
    }
};