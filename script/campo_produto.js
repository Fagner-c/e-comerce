export function openProduct(produto){
    const sectionAlvo_excluir= document.getElementById('produtos-todos');
    sectionAlvo_excluir.innerHTML = ``
    const sectionAlvo_excluir2= document.querySelector('.campo-carrinho');
    sectionAlvo_excluir2.innerHTML = ``
    const sectionAlvo = document.getElementById('produtos-todos');
    const novaDiv_pc = document.createElement('div');
    novaDiv_pc.className = 'card-compra';
    novaDiv_pc.innerHTML += `
            <article class="produtos-compra">

                <a href="index.html" class="voltar">
                    ← Voltar aos produtos
                </a>

                <div class="produto-container">

                    <!-- IMAGEM -->
                    <div class="produto-imagem">

                        <div class="icone-produto">
                            ${produto.icon}
                        </div>

                    </div>

                    <!-- INFORMAÇÕES -->
                    <div class="produto-info">

                        <span class="categoria">
                            ELETRÔNICOS
                        </span>

                        <h1 class="produto-titulo">
                            ${produto.name}
                        </h1>

                        <div class="avaliacao">
                            ★★★★★
                            <span>${produto.rating} / 5</span>
                        </div>

                        <div class="preco">
                            R$ ${produto.price.toFixed(2).replace(".", ",")}
                        </div>

                        <p class="descricao">
                            ${produto.description || "Produto de excelente qualidade, com ótimo desempenho e acabamento."}
                        </p>

                        <p class="estoque">
                            ✓ Em estoque
                        </p>
                        
                        <div class="botoes-produto">

                            <button
                                class="add-cart"
                                data-id="${produto.id}">
                                🛒 Adicionar ao carrinho
                            </button>

                            <button
                                class="btn-comprar"
                                data-id="${produto.id}">
                                Comprar agora
                            </button>

                        </div>

                    </div>

                </div>

        </article>
        `;
    sectionAlvo.appendChild(novaDiv_pc);
}
