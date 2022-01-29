function verificar (){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //Se não digitado nada ou um ano maior que o atual
    //sera solicitado os dados novamente
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique os dados e tente novamente')
    }
    else{

        var fsex = document.getElementsByName('radsex') //Array
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'bebemenino.jpg')
            } else if(idade <21){
                img.setAttributei('src', 'jovemhomem.jpg')
            }else if(idade<50){
                img.setAttribute('src', 'fotoadulto.jpg')
            }else{
                img.setAttribute('src','idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade>=0 && idade<10){
                img.setAttribute('src', 'bebemenina.jpg')
            }else if(idade <21){
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if(idade <50){
                img.setAttribute('src', 'fotoadulta.jpg')
            }else{
                img.setAttribute('src','idosa.jpg')
            }

            
            
        }
        
        img.style.borderRadius = '500px'
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
        

    }
}