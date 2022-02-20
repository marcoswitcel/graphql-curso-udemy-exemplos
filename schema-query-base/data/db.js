const userDefaultTemplate = {
    id: 1,
    nome: 'JJMM',
    email: 'jj@jj.com',
    idade: 18,
    salario_real: 1500.50, // Nome do campo no banco de dados
    vip: false,
    status: 'ATIVO'
};

const usuariosDb = Array(8)
    .fill(0)
    .map((_, index) => {
        const user = Object.assign({}, userDefaultTemplate);

        user.id = `${index + 1}`;
        user.nome += index + 1;
        user.idade += index + 1;
        user.perfil_id = (index % 2) ? 1 : 2;

        return user;
    });

const perfisDB = [
    {
        id: `1`,
        nome: 'normal',
    },
    {
        id: `2`,
        nome: 'administrador',
    }
];

module.exports = {
    usuariosDb,
    perfisDB
}