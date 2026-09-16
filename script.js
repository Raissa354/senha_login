 
function verificarLogin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    console.log("Usuário:", usuario);
    console.log("Senha:", senha);

    if (usuario === "login" && senha === "1234") {

        resultado.textContent = "Login feito com sucesso!";
        resultado.style.color = "green";

    } else {

        resultado.textContent = "Usuário ou senha inválida!";
        resultado.style.color = "red";

    }
}
