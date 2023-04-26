const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoriaBtn = elementoBtn.value;
    let livrosFiltrados = categoriaBtn == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoriaBtn);
    exibirLivrosTela(livrosFiltrados);
    if(categoriaBtn == 'disponivel') {
        const valorTotal = calcularTotalLivrosDisponiveis(livrosFiltrados);
        exibirTotalDisponiveisTela(valorTotal);
    }
}

function filtrarCategoria(categoriaBtn) {
    return livros.filter(livro => livro.categoria == categoriaBtn);
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirTotalDisponiveisTela(valorTotal) {
    elementoTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}