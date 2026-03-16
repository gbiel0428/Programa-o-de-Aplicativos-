function gerarTabuada() {
    // Obtendo o número do input no HTML.
    // Documento = HTML - ID = VARIAVEL NO HTML
    const numerpInput = document.getElementById("numeroInput") ;
    let numero = parent(numerpInput.value) ; 

    //  Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada") ; 
    resultadoDiv.innerHTML = "" ;

    //  Verificar  se a entrada  é um número válido.
     if (isNaN(numero) || numero === numero || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número  válido.<p>"
        return; // Este comando sai da função.
     }

    //  Adicionar titulo para a tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número  ${numero}<h2>`

    // Laço de repetição para gerar tabuada.
    for (let i = 1; 1 <= 10;  i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero}  x ${i} = ${resultado}</p>` ;
    }

}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada); 