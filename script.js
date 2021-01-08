document.querySelector("#peso").addEventListener("change", atualizaIMC)
document.querySelector("#altura").addEventListener("change", atualizaIMC)
const resultado= document.getElementById("resultado");
const classific= document.getElementById("classific");
resultado=classific='';
function atualizaIMC(){
    
    const peso = document.getElementById('peso').value
    const alt = document.getElementById('altura').value
    if(peso !=0 && alt !=0){
        let classificacao;
        let imc = peso/(alt*alt);
        if(imc<17){
            classificacao=`Muito abaixo do peso`
        }else if(imc<18.5){
            classificacao=`Abaixo do peso`
        }else if(imc<25){
            classificacao=`Peso Normal`
        }else if(imc<30){
            classificacao=`Acima do peso`
        }else if(imc<35){
            classificacao=`Obesidade I`
        }else if(imc<40){
            classificacao=`Obesidade II (severa)`
        }else {
            classificacao=`Obesidade III (mórbida)`
        }
        resultado.textContent= `Seu IMC é de ${imc.toFixed(2)}`;
        classific.textContent= classificacao;
    }
}