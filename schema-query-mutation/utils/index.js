
const findUserIndexByFiltro = ({ id, email }, usuarios) => {
	if (id) {
		return usuarios
            .findIndex(usuario => usuario.id === id);
	} else if (email) {
		return usuarios
            .findIndex(usuario => usuario.email === email);
	}

	return -1;
}

const findIndexByFiltro = ({ id, email }, collection) => {
	if (id) {
		return collection
			.findIndex(usuario => usuario.id === id);
	} else if (email) {
		return collection
			.findIndex(usuario => usuario.email === email);
	}

	return -1;
}

module.exports = {
	findUserIndexByFiltro,
	findIndexByFiltro
}