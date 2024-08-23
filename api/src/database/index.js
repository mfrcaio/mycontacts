const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
});

client.connect().then(success => {
    console.log("Banco de dados connectado com sucesso!")
}).catch(error => {
    console.log(`Algum erro aconteceu na conexão com o banco. Erro: ${error}`)
});

exports.query = async (query, values) => {
    const { rows } = await client.query(query, values);
    return rows;
};
