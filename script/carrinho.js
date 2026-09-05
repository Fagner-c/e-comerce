export function carrinho(produto){
    const sectionAlvo_excluir= document.getElementById('produtos-todos');
    sectionAlvo_excluir.innerHTML = ``
    
    if (produto.length > 0){
        const sectionAlvo_excluir2= document.querySelector('.campo-carrinho');
        sectionAlvo_excluir2.innerHTML = ``
        const main_select = document.querySelector(".campo-carrinho")
        const div_produtos  = document.createElement('div')
        div_produtos.className = "carrinho-prod "
        div_produtos.innerHTML = `
                <div class= "produtos-carrinho">
                </div>
                <div class= "produtos-carrinho-preco">
                </div>`
        main_select.appendChild(div_produtos)
        const div_carrinho1 = document.querySelector(".produtos-carrinho")
        const produtos  = document.createElement('div')
        const preco = document.createElement('div')
        let subtotal = 0
        for(let i = 0;i < produto.length; i++)  {
            produtos.innerHTML += `

        <div class="produtos-carrinho2">

                <div class="produto-carrinho2">

                    <div class="produto-imagem2">
                        ${produto[i].icon}
                    </div>

                    <div class="produto-info">
                        <h3>${produto[i].name}</h3>
                        <h4>${produto[i].category}</h4>
                    </div>

                    <p class="produto-preco2">
                        ${produto[i].price}
                    </p>

                    <div class="controle-quantidade2">
                        <button class="menos" data-index="${i}">−</button>

                    <input
                        class="quantidade-input2"
                        type="number"
                        value="${produto[i].quantidade}"
                        data-index="${i}"
                        min="1"
                    >

                    <button class="mais" data-index="${i}">+</button>
                    

                </div>
                <button class="remover">
                        Remover
                    </button>

            </div>
            `
        subtotal += (produto[i].price * produto[i].quantidade)}
        const div_carrinho2 = document.querySelector(".produtos-carrinho")
        preco.innerHTML= `
            <div class="resumo-compra">
            <h3>Resumo da compra</h3>

            <div class="linha-resumo">
                <p>Subtotal</p>
                <p id="subtotal">R$ ${subtotal.toFixed(2)}</p>
            </div>

            <div class="linha-resumo">
                <p>Frete</p>
                <p>R$ 19,90</p>
            </div>

            <div class="separador"></div>

            <div class="linha-total">
                <h3>Total</h3>
                <h3 id="total">R$ ${(subtotal + 19.90).toFixed(2)}</h3>
            </div>

            <button class="finalizar-compra">
                Finalizar compra
            </button>
        </div>`
        div_carrinho1.appendChild(produtos)
        div_carrinho2.appendChild(preco)
        div_carrinho1.addEventListener("click", function(event) {
            if (event.target.classList.contains("mais")) {

                const i = Number(event.target.dataset.index);

                produto[i].quantidade++;

                const input = event.target
                    .parentElement
                    .querySelector(".quantidade-input2");

                input.value = produto[i].quantidade;

                atualizarCarrinho();
            }
            if (event.target.classList.contains("menos")) {

                const i = Number(event.target.dataset.index);

                if (produto[i].quantidade > 1) {

                    produto[i].quantidade--;

                    const input = event.target
                        .parentElement
                        .querySelector(".quantidade-input2");

                    input.value = produto[i].quantidade;

                    atualizarCarrinho();
                }
            }
            if (event.target.classList.contains("remover")) {

                const i = Number(event.target.dataset.index);

                console.log("Removendo:", produto[i]);

                produto.splice(i, 1);

                carrinho(produto);
            }

        });
        function atualizarCarrinho() {

            let subtotal = 0;

            for (let i = 0; i < produto.length; i++) {

                subtotal += produto[i].price * produto[i].quantidade;
            }

            document.getElementById("subtotal").textContent =
                `R$ ${subtotal.toFixed(2)}`;

            document.getElementById("total").textContent =
                `R$ ${(subtotal + 19.90).toFixed(2)}`;
        }
    }
 }


   
