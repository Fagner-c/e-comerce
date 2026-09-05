import { produtos_todos } from "./paginas-produtos/todos.js";
import { produtos_roupas } from "./paginas-produtos/roupas.js";
import { produtos_eletronicos } from "./paginas-produtos/eletronicos.js";
import { produtos_acessorios } from "./paginas-produtos/acessorios.js";
import { produtos_calcados } from "./paginas-produtos/calcados.js";
import { openProduct } from "./campo_produto.js";
import { carrinho } from "./carrinho.js";
let products = [
  {id:1,name:"Fone Bluetooth Pro",price:129.90,category:"Eletrônicos",icon:"🎧",rating:4.8,description:"Fone sem fio com estojo de carregamento, conexão rápida e bateria de longa duração.", quantidade: 1},
  {id:2,name:"Smartwatch Fit X",price:189.90,category:"Eletrônicos",icon:"⌚",rating:4.7,description:"Smartwatch moderno com monitoramento de atividades, notificações e tela colorida.",quantidade: 1},
  {id:3,name:"Tênis Urban",price:159.90,category:"calçados",icon:"👟",rating:4.9,description:"Tênis confortável para uso diário, com design urbano e solado resistente.", quantidade: 1},
  {id:4,name:"Mochila Executiva",price:119.90,category:"Acessórios",icon:"🎒",rating:4.6,description:"Mochila espaçosa com compartimento para notebook e acabamento resistente.", quantidade: 1},
  {id:5,name:"Luminária LED",price:69.90,category:"Acessórios",icon:"💡",rating:4.8,description:"Luminária LED ajustável para estudos, trabalho e decoração.",quantidade: 1},
  {id:6,name:"Teclado Mecânico",price:229.90,category:"Eletrônicos",icon:"⌨️",rating:4.9,description:"Teclado mecânico compacto com teclas responsivas e construção robusta.",quantidade: 1},
  {id:7,name:"Camiseta Premium",price:59.90,category:"Roupa",icon:"👕",rating:4.7,description:"Camiseta de tecido macio e corte moderno para combinar com vários estilos.", quantidade: 1},
  {id:8,name:"Garrafa Térmica",price:49.90,category:"Acessórios",icon:"🧴",rating:4.8,description:"Garrafa térmica reutilizável para manter sua bebida na temperatura ideal.", quantidade: 1}
];
produtos_todos(products)
const btn_todos = document.querySelector('#btn-todos')
btn_todos.addEventListener('click', () => {
        produtos_todos(products);
});
const btn_roupas = document.querySelector('#btn-rp')
btn_roupas.addEventListener('click', () => {
        produtos_roupas(products);
});
const btn_el = document.querySelector('#btn-el')
btn_el.addEventListener('click', () => {
        produtos_eletronicos(products);
});
const btn_ac = document.querySelector('#btn-ac')
btn_ac.addEventListener('click', () => {
        produtos_acessorios(products);
});
const btn_cl = document.querySelector('#btn-cl')
btn_cl.addEventListener('click', () => {
        produtos_calcados(products);
});


const sectionAlvo = document.getElementById('produtos-todos');
sectionAlvo.addEventListener("click", function(event) {
    const botaoComprar = event.target.closest(".buy-now");
    if (botaoComprar) {
        const cardDesconto = document.querySelector(".card-desconto");
        cardDesconto.classList.add("off");
        const id = Number(botaoComprar.dataset.id);
        const produto = products.find(product => product.id === id);
        openProduct(produto)
     return;
    }
});
let c = 0
document.addEventListener("click", function(event) {
    
    if (event.target.classList.contains("add-cart")) {
        
        let cont = document.querySelector('.compra') 
        cont.textContent = `${c+=1}`
        const id = Number(event.target.dataset.id);

        const produto = products.find(
            product => product.id === id
        );
        
        carrinho_function(produto);
    }

});

let products_comprados= [];
function carrinho_function(produto) {
    let index = products_comprados.findIndex(p => p.id === produto.id);
    if (index !== -1) {
        products_comprados[index].quantidade += 1;
        
    } 
    else {
        products_comprados.push(produto);
    }
}
const btn_compra = document.querySelector('.compras')
const cardDesconto = document.querySelector(".card-desconto");
        btn_compra.addEventListener('click', () => {
                cardDesconto.classList.add("off");
                carrinho(products_comprados)
                
});
