
let usuarios = []

if (localStorage.getItem('cadastrados')) {
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function cadastrar() {
    let guardar_nome =document.getElementById('nome').value;
    let guardar_apelido =document.getElementById('apelido').value;
    let guardar_senha =document.getElementById('senha').value;
    let guardar_email =document.getElementById('email').value;
    let guardar_cpf =document.getElementById('cpf').value;
    let guardar_data =document.getElementById('data_nascimento').value;
    let data= new Date();

    let usuario={
        nome: guardar_nome.trim(),
        apelido: guardar_apelido.trim(),
        senha: guardar_senha,
        email: guardar_email.toLowerCase(),
        cpf: guardar_cpf,
        data:guardar_data,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    if (guardar_nome.length > 2 &&
        guardar_senha.length > 5 &&
        guardar_apelido.length > 2 &&
        guardar_cpf.length < 12 &&
        guardar_email.length > 4 &&
        guardar_nome.trim().length != 0 &&
        guardar_senha.trim().length != 0 &&
        guardar_apelido.trim().length != 0 &&
        guardar_email.trim().length != 0 &&
        guardar_cpf.trim().length != 0 
    ) {
        if (procura_usuario(usuario.email)==-1) {
            usuarios.push(usuario)
            localStorage.setItem('cadastrados', JSON.stringify(usuarios))
            alert('Usuário Cadastrado!')
            location.assign('../TelaLogin.html')
        }else{
            alert("Usuário já existe!")
        }
    }
    if (guardar_nome.length <= 2 ||
        guardar_nome.trim().length == 0) {
        document.getElementById('alerta_nome').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_nome').innerHTML = ``
        }, 3000)
    }

    if (guardar_senha.length <= 5 ||
        guardar_senha.trim().length == 0) {
        document.getElementById('alerta_senha').innerHTML = `A senha precisa ter entre 6-10 carecteres`
        setTimeout(() => {
            document.getElementById('alerta_senha').innerHTML = ``
        }, 3000)
    }

    if( guardar_apelido.length <= 2 ||
        guardar_apelido.trim().length == 0) {
        document.getElementById('alerta_apelido').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_apelido').innerHTML = ``
        }, 3000)
    }

    if ( guardar_email.length <=3 ||
         guardar_email.trim().length == 0) {
        document.getElementById('alerta_email').innerHTML = `Mínimo de três caracteres antes do @`
        setTimeout(() => {
            document.getElementById('alerta_email').innerHTML = ``
        }, 3000)
    }
    if (guardar_cpf.length >= 12 ||
        guardar_cpf.trim().length == 0) {
        document.getElementById('alerta_cpf').innerHTML = `Seu CPF possui muitos caracteres, o maximo são 11 digitos`
        setTimeout(() => {
            document.getElementById('alerta_cpf').innerHTML = ``
        }, 3000)
    }
    if (guardar_data.length < 8||
        guardar_data.trim().length == 0) {
        document.getElementById('alerta_data').innerHTML = `Data esta incompleta, preencha todos os 8 números`
        setTimeout(() => {
            document.getElementById('alerta_data').innerHTML = ``
        }, 3000)
    }
}

let enter = document.querySelectorAll('input')
enter.forEach((element)=>{
    element.addEventListener('keypress',(event)=>{
        if(event.key =='Enter'){
            cadastrar()
        }
    })
})


function procura_usuario(guardar_email) {
    let index = usuarios.findIndex((element) => {
        return element.email == guardar_email
    })
    return index
}