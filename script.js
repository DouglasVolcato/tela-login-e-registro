const usuariosRegistrados = [];


function deslogar(){
    const sessoes1 = document.querySelector("#registro");
    const sessoes2 = document.querySelector("#login");
    sessoes1.style.display = "unset";
    sessoes2.style.display = "unset";

    const head = document.querySelector("h1");
    const botao = document.querySelector(".deslogar");
    head.style.display = "none";
    botao.style.display = "none";
};
class usuario{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    };
    get verNome(){
        return this.nome;
    };
    get verEmail(){
        return this.email;
    };
    get verSenha(){
        return this.senha;
    };
};
function registrar(){
    const arrUsuarios = usuariosRegistrados.map(n => n.nome);
    const registroUsuario = document.querySelector("#registroUsuario").value;
    const registroEmail = document.querySelector("#registroEmail").value;
    const registroSenha = document.querySelector("#registroSenha").value;

    const a1= document.querySelector("#registroUsuario");
    const a2 = document.querySelector("#registroEmail");
    const a3 = document.querySelector("#registroSenha");
    a1.value = "";
    a2.value = "";
    a3.value = "";

    function toArr(nome) {
        const arr = [];
        for (let n of nome){
            arr.push(n);
        };
        return arr;
    };

    function emailVerify(email) {
        let count = 0;
        for (let n of email){
            if (n == "." || n == "@"){
                count++;
            };
        };
        if (count == 2){
            return true;
        } else {
            return false;
        };
    };

    if (registroUsuario == "" || registroEmail == "" || registroSenha == ""){
        alert("Preencha todos os campos.");

    } else if (emailVerify(registroEmail) == false){
        alert("Digite um email válido.");

    } else if (toArr(registroUsuario).length < 3){
        alert("O usuário deve conter pelo menos 3 dígitos.");

    } else if (toArr(registroSenha).length < 6){
        alert("A senha deve conter pelo menos 6 dígitos.");

    } else if (arrUsuarios.indexOf(registroUsuario) != -1) {
        alert("Usuário já registrado.");

    } else {
        const novoUsuario = new usuario(registroUsuario, registroEmail, registroSenha);
        usuariosRegistrados.push(novoUsuario);
        alert(`Registro concluído! \nUsuário: ${novoUsuario.verNome} \nEmail: ${novoUsuario.verEmail} \nSenha: ${novoUsuario.verSenha}`);
    }
};
function entrar(){

    const arrUsuarios = usuariosRegistrados.map(n => n.nome);
    const arrSenhas = usuariosRegistrados.map(n => n.senha);
    const loginUsuario = document.querySelector("#loginUsuario").value;
    const loginSenha = document.querySelector("#loginSenha").value;

    const a1= document.querySelector("#loginUsuario");
    const a2 = document.querySelector("#loginSenha");
    a1.value = "";
    a2.value = "";

    if (arrUsuarios.indexOf(loginUsuario) == -1) {
        alert("Usuário não registrado.");

    } else {
        const localizacao = arrUsuarios.indexOf(loginUsuario);
        const senhaCorreta = arrSenhas[localizacao];

        if (loginSenha == senhaCorreta){
            alert("Login realizado com sucesso!");
            const sessoes1 = document.querySelector("#registro");
            const sessoes2 = document.querySelector("#login");
            const body = document.querySelector("body");

            sessoes1.style.display = "none";
            sessoes2.style.display = "none";

            if (body.childElementCount > 4){
                const head = document.querySelector("h1");
                const botao = document.querySelector(".deslogar");
                head.style.display = "unset";
                botao.style.display = "unset";
            } else {
                const logado = document.createElement("h1");
                const botaoDeslogar = document.createElement("button");
                botaoDeslogar.className = "deslogar";

                const logado1 = document.createTextNode(`Logado como ${loginUsuario}`)
                const botaoDeslogar1 = document.createTextNode("DESLOGAR");

                botaoDeslogar.setAttribute("onclick", "deslogar()");

                logado.appendChild(logado1);
                botaoDeslogar.appendChild(botaoDeslogar1);
                body.appendChild(logado);
                body.appendChild(botaoDeslogar);

                console.log(botaoDeslogar);
                console.log(botaoDeslogar1);
            }
        } else {
            alert("Senha incorreta");
        };
    };
};