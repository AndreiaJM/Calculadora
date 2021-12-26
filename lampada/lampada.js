var btn1 = window.document.getElementById('botao1')
var btn2 = window.document.getElementById('botao2')
var imagem = window.document.getElementById('img')

btn1.addEventListener('click', acender)
btn2.addEventListener('click', apagar)
imagem.addEventListener('click', quebrar)
imagem.addEventListener('mouseenter', entrar)
imagem.addEventListener('mouseleave', sair)




function acender(){
    imagem.src = 'assets/imagens/ligada.jpg'

}

function apagar(){
    imagem.src = 'assets/imagens/desligada.jpg'
}

function quebrar(){
    imagem.src = 'assets/imagens/quebrada.jpg'
}

function entrar(){
    imagem.src = 'assets/imagens/ligada.jpg'
}

function sair (){
    imagem.src = 'assets/imagens/desligada.jpg'
}
