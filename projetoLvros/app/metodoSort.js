let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosTela(livrosOrdenados);
}