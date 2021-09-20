const Pessoas = require('../models/Pessoas');

module.exports = {
    async index(req, res) {
        const pessoas = await Pessoas.findAll();

        return res.json(pessoas);
    },

    async store(req, res) {
        const { id } = req.params;
        const { name, surname, email, zip_code, state, city, street, doc_number, cellphone, nationality } = req.body;
        let cpf = doc_number;
        cpf = cpf.replace(/[^\d]/g, "");
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        // if(id){

        // }else{
        const pessoas = await Pessoas.create({ name, surname, email, zip_code, state, city, street, cpf, cellphone, nationality });
        // }
        return res.json(pessoas)
    },

    async show(req, res) {

        const { id } = req.params;

        const pessoas = await Pessoas.findByPk(id)

        return res.json(pessoas);
    },

    async destroy(req, res) {
        const { id } = req.params;

        Pessoas.destroy({
            where: {
                id: id
            }
        })
        return res.json('ok');
    }
};