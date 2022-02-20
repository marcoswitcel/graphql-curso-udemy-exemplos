
module.exports = {
    // resolver do campo `produtoComDesconto`
    produtoComDesconto(produto) {
        return (produto.desconto) ?
            produto.preco * (1 - produto.desconto) :
            produto.preco;
    },
};
