var loginest = false
export function login(usuer){
    if(loginest == false){
        const camnpo_lg = document.querySelector(".l")
        camnpo_lg.innerHTML=`
        <div class="login-container" id="loginContainer">

            <div class="login-card">

                <button class="fechar-login" id="fecharLogin">
                    ×
                </button>

                <div class="login-titulo">
                    <h2>Bem-vindo!</h2>
                    <p>Entre na sua conta Distributio</p>
                </div>

                <form id="loginForm">

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

                    <div class="opcoes-login">
                        <label>
                            <input type="checkbox" id="lembrar">
                            Lembrar de mim
                        </label>

                        <a href="#">Esqueci minha senha</a>
                    </div>

                    <button type="submit" class="botao-entrar">
                        Entrar
                    </button>

                </form>

                <div class="cadastro-login">
                    <p>
                        Ainda não possui uma conta?
                        <button class="new-conta"> Criar conta</button>
                    </p>
                </div>

            </div>

        </div>
        `
        const loginContainer = document.querySelector("#loginContainer");
        const fecharLogin = document.querySelector("#fecharLogin");
        loginContainer.classList.add("ativo");
        

        fecharLogin.addEventListener("click", function() {
            loginContainer.classList.remove("ativo");
            loginest = false
        });
        const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;

        const usuario = usuer.find(u => u.email === email);

        if (usuario) {

            if (usuario.senha === senha) {
                loginContainer.classList.remove("ativo");
                loginest=  true

            } else {

                alert("Senha incorreta!");

            }

        } else {

            alert("Usuário não encontrado!");

        }

        });
    }
    else{
        alert("voce já está logado")
    }
    return loginest
}