const { perfisDB } = require('../data/db.js');

module.exports = {
    // resolver do campo `salario`
    salario(usuario) {
        return usuario.salario_real;
    },
    perfil(usuario) {
        const selecionados = perfisDB.filter((perfil) => perfil.id === `${usuario.perfil_id}`);

        return (selecionados.length > 0) ? selecionados[0] : null;
    }
};
