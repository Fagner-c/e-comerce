export function conta(usuer){
    
    const camnpo_lg = document.querySelector(".l")
    camnpo_lg.innerHTML=`
   <div class="cadastro-container">
    <div class="cadastro-card">
        
        <button class="fechar-card" id="fecharcard">
                ×
        </button>
        <div class="login-titulo">
            <h2>Criar conta</h2>
            <p>Crie sua conta Distributio</p>
        </div>

        <form id="cadastroForm">

            <div class="campo-login">
                <label for="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    required
                >
            </div>

            <div class="campo-login">
                <label for="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                >
            </div>

            <div class="campo-login">
                <label for="senha">Senha</label>
                <input
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha"
                    required
                >
            </div>

            <div class="campo-login">
                <label for="confirmarSenha">Confirmar senha</label>
                <input
                    type="password"
                    id="confirmarSenha"
                    placeholder="Digite a senha novamente"
                    required
                >
            </div>

            <button type="submit" class="botao-entrar">
                Criar conta
            </button>

        </form>

    </div>
</div>
    `
    const cadastroContainer = document.querySelector(".cadastro-container");
    const fecharcadastro = document.querySelector("#fecharcard")
    cadastroContainer.classList.add("ativo");
    fecharcadastro.addEventListener("click", function() {
        cadastroContainer.classList.remove("ativo");
    });

    const cadastroForm = document.querySelector("#cadastroForm");

cadastroForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value;
    const confirmarSenha = document.querySelector("#confirmarSenha").value;


    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {

        alert("As senhas não são iguais!");

        return;
    }

    const usuarioExistente = usuer.find(
        u => u.email === email
    );

    if (usuarioExistente) {
        alert("Esse e-mail já está cadastrado!");
        return;
    }



    let novoUsuario = {
        id: usuer.length + 1,
        email: email,
        senha: senha,
        produtos: [],
        qt : 0

    };
    usuer.push(novoUsuario);
    alert("Conta criada com sucesso!");
    cadastroForm.reset();
    cadastroContainer.classList.remove("ativo");
});
}