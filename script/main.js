let products = [
  {id:1,name:"Fone Bluetooth Pro",price:129.90,category:"Eletrônicos",icon:"🎧",rating:4.8,description:"Fone sem fio com estojo de carregamento, conexão rápida e bateria de longa duração."},
  {id:2,name:"Smartwatch Fit X",price:189.90,category:"Eletrônicos",icon:"⌚",rating:4.7,description:"Smartwatch moderno com monitoramento de atividades, notificações e tela colorida."},
  {id:3,name:"Tênis Urban",price:159.90,category:"Moda",icon:"👟",rating:4.9,description:"Tênis confortável para uso diário, com design urbano e solado resistente."},
  {id:4,name:"Mochila Executiva",price:119.90,category:"Acessórios",icon:"🎒",rating:4.6,description:"Mochila espaçosa com compartimento para notebook e acabamento resistente."},
  {id:5,name:"Luminária LED",price:69.90,category:"Casa",icon:"💡",rating:4.8,description:"Luminária LED ajustável para estudos, trabalho e decoração."},
  {id:6,name:"Teclado Mecânico",price:229.90,category:"Eletrônicos",icon:"⌨️",rating:4.9,description:"Teclado mecânico compacto com teclas responsivas e construção robusta."},
  {id:7,name:"Camiseta Premium",price:59.90,category:"Moda",icon:"👕",rating:4.7,description:"Camiseta de tecido macio e corte moderno para combinar com vários estilos."},
  {id:8,name:"Garrafa Térmica",price:49.90,category:"Casa",icon:"🧴",rating:4.8,description:"Garrafa térmica reutilizável para manter sua bebida na temperatura ideal."}
];

const sectionAlvo = document.getElementById('produtos');
const novaDiv = document.createElement('div');
novaDiv.className = 'card-Produtos';
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    novaDiv.innerHTML += `
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
                        onclick="addToCart(${product.id})">
                        Adicionar ao carrinho
                    </button>

                    <button 
                        class="buy-now"
                        onclick="openProduct(${product.id})">
                        Comprar
                    </button>

                </div>

            </div>
        </article>
    `;
}
sectionAlvo.appendChild(novaDiv);
