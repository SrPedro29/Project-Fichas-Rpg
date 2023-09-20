let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
function login(){
    let guardar_email =document.getElementById('email').value;
    let guardar_senha =document.getElementById('senha').value;
    if(procura_usuario(guardar_email, guardar_senha) != -1){
        alert("Usuário validado! Bem-vindo!")
        location.assign('../Home.html')
    }else{
        alert("Usuário não validado!")
    }
}
function procura_usuario(guardar_email, guardar_senha) {
    let index = usuarios.findIndex((element) => {
        return element.email == guardar_email && element.senha == guardar_senha
    })
    return index
}

let enter = document.querySelectorAll('input')
enter.forEach((element)=>{
    element.addEventListener('keypress',(event)=>{
        if(event.key =='Enter'){
            login()
        }
    })
})