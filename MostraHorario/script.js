function carregar(){

    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var data = new Date
    var hora = data.getHours()
    
    

    mensagem.innerHTML = `Agora são ${hora} horas `

    if(hora>=0 && hora<12){
        imagem.src = 'fotomanha.jpg'
        document.body.style.background='#7bc2f6'
    }
    else if(hora>=12 && hora<18){
        imagem.src = 'fototarde.jpg'
        document.body.style.background='#db7532'
    }
    else{
        imagem.src = 'fotonoite.jpg'
        document.body.style.background='#1a7695'
    }





}