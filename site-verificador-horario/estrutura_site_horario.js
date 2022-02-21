function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas!</p>`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.svg';
        document.body.style.background = '#e2cd9e';
    }   else if (hora > 12 && hora <= 18){
        img.src = 'fototarde.svg';
        document.body.style.background = '#b9846f';
    }   else {
        img.src = 'fotonoite.svg';
        document.body.style.background = '#515154';
    }
}
