export function fim(){
    const sectionAlvo_excluir= document.getElementById('produtos-todos');
    sectionAlvo_excluir.innerHTML = ``
    const sectionAlvo_excluir2= document.querySelector('.campo-carrinho');
    sectionAlvo_excluir2.innerHTML = ``
    sectionAlvo_excluir2.innerHTML =`
        <section class="compra-finalizada" id="compraFinalizada">

            <div class="compra-finalizada-card">

                <div class="icone-sucesso">
                    ✓
                </div>

                <h1>Compra realizada!</h1>

                <p>
                    Seu pedido foi realizado com sucesso.
                </p>

                <p class="numero-pedido">
                    Número do pedido: <strong id="numeroPedido"></strong>
                </p>

                <div class="pedido-info">

                    <p>
                        📦 Seu pedido está sendo preparado.
                    </p>

                    <p>
                        🚚 Você poderá acompanhar a entrega
                        posteriormente.
                    </p>

                </div>

                <button id="voltarInicio">
                    Voltar para a loja
                </button>

            </div>

        </section>`
}