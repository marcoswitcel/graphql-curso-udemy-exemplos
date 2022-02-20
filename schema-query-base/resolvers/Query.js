const { usuariosDb, perfisDB } = require('../data/db.js');

module.exports = {
    ola() {
        return 'Olá mundo do GraphQL';
    },
    horaAtual() {
        return new Date().toLocaleString();
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'JJ',
            email: 'jj@jj.com',
            idade: 18,
            salario_real: 1500.50, // Nome do campo no banco de dados
            vip: false
        };
    },
    produtoEmDestaque() {
        return {
            nome: 'Celular',
            preco: 1200,
            desconto: 0.1,
        }
    },
    numerosMegaSena() {
        const asc = (a, b) => a - b;
        return Array(6)
            .fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(asc);
    },
    usuarios() {
        return usuariosDb;
    },
    usuario(_, args) {
        const selecionados = usuariosDb.filter(user => user.id === args.id);

        return (selecionados.length > 0) ? selecionados[0] : null;
    },
    perfis() {
        return perfisDB;
    },
    perfil(_, args) {
        const selecionados = perfisDB.filter(perfil => perfil.id === args.id);

        return (selecionados.length > 0) ? selecionados[0] : null;
    },
}