function voto () {
    let idade = parseFloat(document.getElementById("idade1").value);

    if (idade < 16) {
        document.getElementById("resultado").innerHTML = "Não pode votar!"}
        else if 
            (idade >= 16 && idade <18 ) 
        document.getElementById("resultado").innerHTML = "Voto opcional"    
        else if  (idade >=18 && idade  <=65) 
                    document.getElementById("resultado").innerHTML = "Voto obrigadorio"
        else {
            document.getElementById("resultado").innerHTML = "Voto opcional"
        }
}





const button = document.getElementById("Votar");
button.addEventListener("click",voto);



e (idade >= 18) 
                    document.getElementById("resultado").innerHTML = "Voto obrigadorio"