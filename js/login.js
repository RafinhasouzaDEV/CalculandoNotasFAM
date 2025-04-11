
//Função para verificar os eventos do formulario
function eventoDeLogin(){

    let loginInput = document.getElementById("login-input");
    let senhaInput = document.getElementById("senha-input");
    let botaoLogin = document.getElementById("entrar-login");

    loginInput.addEventListener("input", (textoLogin) => {
        console.log("digitando o usuario...");
        console.log(textoLogin.target.value);
    })

    senhaInput.addEventListener("input", (textoSenha) => {
        console.log("Digitando a senha...");
        console.log(textoSenha.target.value);
    })

    botaoLogin.addEventListener("click", (clickBotao) => {
        console.log("acessando cadastro...");
        console.log(clickBotao.target.value);
    })
}

eventoDeLogin();


document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    
    let usuario = document.getElementById("login-input").value;
    let senha = document.getElementById("senha-input").value;

    // Lógica básica para verificar se os campos estão preenchidos
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Aqui você pode incluir a validação do usuário/senha (opcional)
        if (usuario === "client" && senha === "admin") { // Exemplo de validação simples
            // Redireciona para outra página
            window.location.href = "/home.html"; // Caminho para a página de destino
        } else {
            alert("Usuário ou senha inválidos. Tente novamente!");
        }
    }
});

// Função "Esqueci minha senha"
document.getElementById("esqueci-senha").addEventListener("click", function() {
    alert("Link para recuperação de senha enviado ao seu email!");
});
