function conferir(){
    var tnum1 = document.getElementById('tnum1');
    var tnum2 = document.getElementById('tnum2');
    var res = document.getElementById('resultado');

    var num1 = Number(tnum1.value);
    var num2 = Number(tnum2.value);

    if (num1 <= 0 || num2 <= 0){
        alert('ERRO - É necessário entrar com números maiores do que ZERO.')
    } else{
        if(num1 == num2){
            res.innerHTML = `Os números ${num1} e ${num2} são iguais. `
        } else{
            res.innerHTML = `Os números ${num1} e ${num2} NÃO são iguais. `
        }

        var soma = num1 + num2;
        
        soma > 10 && soma < 20 ? res.innerHTML += `A soma entre eles é ${soma}, e é maior do que 10 e menor do que 20` : res.innerHTML += `A soma entre eles é ${soma}, e NÃO é maior do que 10 e menor do que 20.`;
    }   
}
