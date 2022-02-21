function verificar(){
    var data = new Date();
    var ano = data.getFullYear();   //Ano atual

    var fano = document.getElementById('txtano');  //fano - Ano digitado no formulário

    var res = document.querySelector('div#resultado');

    if (fano.value.length != 4 || Number(fano.value) > ano){  //Duas formas de converter a string de ano para número
        
        alert('[ERRO] Verifique os dados e tente novamente!');

    } else {
        var fsex = document.getElementsByName('sexo');  // fsex - Sexo selecionado no formulário

        var idade = ano - Number(fano.value);

        var img = document.createElement('img');  // É a mesma coisa que criar uma tag img no html
        img.setAttribute('id', 'foto');  //É a mesma coisa que colocar um id='foto' na tag img no html
        var genero = ''
        if (fsex[0].checked){   // [0] é o primeiro elemento com o name=sexo que é o sexo masculino. [1] é o feminino
            genero = 'Homem';
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'homembebe.svg');
            } else if (idade < 25) {
                img.setAttribute('src', 'homemjovem.svg');
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.svg');
            } else{ //o último é só else
                img.setAttribute('src', 'homemvelho.svg');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'mulherbebe.svg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem.svg');
            } else if (idade < 50){
                img.setAttribute('src', 'mulheradulta.svg');
            } else{ //o último é só else
                img.setAttribute('src', 'mulhervelha.svg');
            }
        }
        
        res.innerHTML = `Você é ${genero} com <strong>${idade}</strong> anos!`;
        res.appendChild(img); //adiciona um elemento que é a imagem
        
    }
}