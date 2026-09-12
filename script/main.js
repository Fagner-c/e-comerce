import { produtos_todos } from "./paginas-produtos/todos.js";
import { produtos_roupas } from "./paginas-produtos/roupas.js";
import { produtos_eletronicos } from "./paginas-produtos/eletronicos.js";
import { produtos_acessorios } from "./paginas-produtos/acessorios.js";
import { produtos_calcados } from "./paginas-produtos/calcados.js";
import { openProduct } from "./campo_produto.js";
import { carrinho } from "./carrinho.js";
import { login } from "./login.js";
import { conta } from "./criar-conta.js";
import { fim } from "./fim_compra.js";
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
let usuer=[
    {id:1, email:"fagnercaardoso@gmail.com", senha:"abacate", produtos: [], qt: 0},
]
let login_ativo = false;
let user_index = null;
const dados = localStorage.getItem("usuarios");
if (dados) {
    usuer = JSON.parse(dados);
}
const loginSalvo = localStorage.getItem("login_ativo");
const usuarioSalvo = localStorage.getItem("user_index");

if (loginSalvo !== null) {
    login_ativo = JSON.parse(loginSalvo);
}

if (usuarioSalvo !== null && usuarioSalvo !==undefined ) {
    user_index = JSON.parse(usuarioSalvo);
}
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
document.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-cart")) {
            if( login_ativo == true){
            let cont = document.querySelector('.compra') 
            usuer[user_index].qt ++
            cont.textContent = `${usuer[user_index].qt}`
                const id = Number(event.target.dataset.id);
                const produto = products.find(
                    product => product.id === id
                );
                
                carrinho_function(produto);
            }
            else{
                login(usuer, function(status1,status2){
            login_ativo = status1
            user_index = status2
            localStorage.setItem(
        "login_ativo",
        JSON.stringify(login_ativo)
    );

    localStorage.setItem(
        "user_index",
        JSON.stringify(user_index)
    );
                })
            }
         }
});

function carrinho_function(produto) {
    let index = usuer[user_index].produtos.findIndex( p => p.id === produto.id);
    if (index !== -1) {
        usuer[user_index].produtos[index].quantidade += 1;
        
    } 
    else {
        usuer[user_index].produtos.push(produto);
    }
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuer)
    );
}
const btn_compra = document.querySelector('.compras')
const cardDesconto = document.querySelector(".card-desconto");
        btn_compra.addEventListener('click', () => {
                if(login_ativo == true){
                cardDesconto.classList.add("off");
                carrinho(usuer[user_index].produtos)}
                else{
                    cardDesconto.classList.add("off");
                    carrinho([])
                }
                
});
const btnLogin = document.querySelector(".btn-login");
btnLogin.addEventListener("click", function() {
    if(login_ativo == false){
        login(usuer, function(status1,status2){
            login_ativo = status1
            user_index = status2
        localStorage.setItem(
        "login_ativo",
        JSON.stringify(login_ativo)
            );

    localStorage.setItem(
        "user_index",
        JSON.stringify(user_index)
    );
        })
            }
    });

document.addEventListener("click", function(event) {
    if(event.target.classList.contains('finalizar-compra')){
        fim()
    }
    if (event.target.classList.contains("new-conta")) {
        conta(usuer)
        localStorage.setItem("usuario", JSON.stringify(usuer))
    }
    if (event.target.classList.contains("btn-comprar")) {
        if(login_ativo == true){
            let cont = document.querySelector('.compra') 
            usuer[user_index].qt += 1
            cont.textContent = `${usuer[user_index].qt}`
            const id = Number(event.target.dataset.id);
            localStorage.setItem("usuario", JSON.stringify(usuer))
            const produto = products.find(
                product => product.id === id
            );
            
            carrinho_function(produto);
            carrinho(usuer[user_index].produtos)
            localStorage.setItem("usuario", JSON.stringify(usuer))
        }
        else{
            login(usuer, function(status1,status2){
            login_ativo = status1
            user_index = status2
             localStorage.setItem(
        "login_ativo",
        JSON.stringify(login_ativo)
    );

    localStorage.setItem(
        "user_index",
        JSON.stringify(user_index)
    );
                })
            }
        }
    if (event.target.classList.contains("finalizar-compra")) {
        if(login_ativo == true){
        }
        else{
            login(usuer, function(status1,status2){
            login_ativo = status1
            user_index = status2
             localStorage.setItem(
        "login_ativo",
        JSON.stringify(login_ativo)
    );

    localStorage.setItem(
        "user_index",
        JSON.stringify(user_index)
    );
        })
        }
    }
});
localStorage.setItem("usuario", JSON.stringify(usuer))