const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {

        const ongs = await connection('ongs').select('*');//lista todas as ongs 

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //gera um id aleatorio

        await connection('ongs').insert({ //insere dados na tabela
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}