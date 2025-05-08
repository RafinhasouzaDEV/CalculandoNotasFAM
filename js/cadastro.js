document.getElementById("form-cadastro").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("cadastro-nome").value;
    const senha = document.getElementById("cadastro-senha").value;

    //Depois, no login, você recupera com
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    //Aqui você armazena dentro do array os objetos nome e senha
    usuarios.push({ nome, senha });
    //Quando o usuário se cadastra no cadastro.html, você salva os dados em JSON assim
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Redireciona para login
    alert("Cadastro realizado com sucesso! Salve seu usuário e senha em um local seguro!");
    window.location.href = "index.html"; 
});
