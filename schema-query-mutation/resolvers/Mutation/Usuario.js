const { usuarios, proximoId } = require('../../data/db');
const { findUserIndexByFiltro } = require('../../utils/');

module.exports = {
    novoUsuario(_, { dados }) {
        const { nome, email, idade } = dados;
        const emailEmUso = usuarios
            .some(usuario => usuario.email === email);

        if (emailEmUso) throw new Error(`O e-mail: "${email}" já está em uso!`);

        const novoUsuario = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO'
        };

        usuarios.push(novoUsuario);

        return novoUsuario;
    },
    excluirUsuario(_, { filtro }) {
        const index = findUserIndexByFiltro(filtro, usuarios);

        if (index < 0) return null;

        const excluido = usuarios.splice(index, 1);

        return excluido.length > 0 ? excluido[0] : null
    },
    alterarUsuario(_, { filtro, dados }) {
        const i = findUserIndexByFiltro(filtro, usuarios)

        const usuario = usuarios[i];

        if (usuario) {
            const newUsuario = {
                ...usuario,
                ...dados,
            };

            usuarios.splice(i, 1, newUsuario);

            return newUsuario;
        }

        return null;
    }
}