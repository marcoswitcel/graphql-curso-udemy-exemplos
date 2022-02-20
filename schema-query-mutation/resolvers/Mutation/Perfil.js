const { perfis, proximoId } = require('../../data/db');
const { findIndexByFiltro } = require('../../utils/');

module.exports = {
    novoPerfil(_, { dados }) {
        const nomeUsado = perfis
            .some(perfil => perfil.nome === dados.nome);

        if (nomeUsado) throw new Error(`O nome: "${dados.nome}" já está em uso!`);

        const perfil = {
            ...dados,
            id: proximoId()
        };

        perfis.push(perfil);

        return perfil;
    },
    excluirPerfil(_, { filtro }) {
        const index = findIndexByFiltro(filtro, perfis);

        if (index < 0) return null;

        const excluded = perfis.splice(index, 1);

        return excluded[0] ? excluded[0] : null;
    },
    alterarPerfil(_, { filtro, dados }) {
        const index = findIndexByFiltro(filtro, perfis);
        const perfil = perfis[index];

        if (perfil) {
            const newPerfil = {
                id: perfil.id,
                nome: dados.nome
            };

            perfis.splice(index, 1, newPerfil);

            return newPerfil;
        }
        

        return null;
    },
}