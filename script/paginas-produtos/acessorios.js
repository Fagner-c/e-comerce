export function produtos_acessorios(products){
    const sectionAlvo_excluir2= document.querySelector('.campo-carrinho');
    sectionAlvo_excluir2.innerHTML = ``
    const sectionAlvo_excluir= document.getElementById('produtos-todos');
    sectionAlvo_excluir.innerHTML = ``
    const cardDesconto = document.querySelector(".card-desconto");
    cardDesconto.classList.remove("off");
    const sectionAlvo = document.getElementById('produtos-todos');
    const novaDiv_pt = document.createElement('div');
    novaDiv_pt.className = 'card-Produtos';
    const novoH3 = document.createElement('h3');
    novoH3.className = 'text-section-p'
    novoH3.textContent ='Produtos em destaque'
    const novospan = document.createElement('span');
    novospan.className = 'span-text'
    novospan.textContent = '3 produtos(s)'
    sectionAlvo.appendChild(novoH3);
    sectionAlvo.appendChild(novospan);
    for (let i = 0; i < products.length; i++) {
        if(products[i].category == "Acessórios"){
            const product = products[i];
            novaDiv_pt.innerHTML += `
                <article class='produtos-divisao'>
                <div class="product-image">
                ${product.icon}
                </div>

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <div class="product-rating">
                        ⭐ ${product.rating}
                    </div>

                    <p class="product-price">
                        R$ ${product.price.toFixed(2).replace(".", ",")}
                    </p>

                    <div class="product-actions">

                        <button 
                            class="add-cart"
                            data-id = ${product.id}>
                            Adicionar ao carrinho
                        </button>

                        <button 
                            class="buy-now"
                            data-id = ${product.id}>
                            Comprar
                        </button>

                    </div>

                </div>
            </article>
        `;
        }
    }
    sectionAlvo.appendChild(novaDiv_pt);
}