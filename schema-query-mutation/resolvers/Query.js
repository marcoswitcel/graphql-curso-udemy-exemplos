const { usuarios, perfis } = require('../data/db')
const { findUserIndexByFiltro } = require('../utils/')

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { filtro }) {
        const i = findUserIndexByFiltro(filtro, usuarios);
        const usuario = usuarios[i];

        return usuario ? usuario : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { filtro }) {
        const i = findUserIndexByFiltro(filtro, perfis);
        const perfil = perfis[i];

        return perfil ? perfil : null
    }
}