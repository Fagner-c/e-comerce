export function conta(usuer){
    
    const camnpo_lg = document.querySelector(".l")
    camnpo_lg.innerHTML=`
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
    `
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


    // Verifica se o e-mail já existe
    const usuarioExistente = usuer.find(
        u => u.email === email
    );

    if (usuarioExistente) {

        alert("Esse e-mail já está cadastrado!");

        return;
    }


    // Cria o novo usuário
    const novoUsuario = {

        id: usuer.length + 1,
        nome: nome,
        email: email,
        senha: senha

    };


    // Adiciona ao array
    usuer.push(novoUsuario);


    console.log("Novo usuário:", novoUsuario);
    console.log("Usuários:", usuer);


    alert("Conta criada com sucesso!");

    cadastroForm.reset();

});
}