//fui além,aonde fui ver  if else.

// chat gpt fez a parte  de limpar e da msg erro  so para entender como seria usar um button aonde um limpa quando não digita  aparecer a msg erro quando campo ta limpo
function mult() {
    const numero1 = document.querySelector("#numero-1").value;
    const numero2 = document.querySelector("#numero-2").value;
    const numero3 = document.querySelector("#numero-3").value;
    const paragrafo = document.querySelector(".resultado");

    if (numero1 === "" || numero2 === "" || numero3 === "") {
        paragrafo.innerHTML = "Erro: Preencha todos os números!";
    } else {
        // Multiplica os valores e exibe o resultado
        const resultado = Number(numero1) * Number(numero2) * Number(numero3);
        paragrafo.innerHTML = `Resultado: ${resultado}`;
    }
}

function limpar() {
    const paragrafo = document.querySelector(".resultado");

    // Limpa os inputs
    document.querySelector("#numero-1").value = "";
    document.querySelector("#numero-2").value = "";
    document.querySelector("#numero-3").value = "";
    
    // Limpa o resultado
    paragrafo.innerHTML = "";
}

// Configura o evento do botão "Calcular"
const buttonCalcular = document.querySelector("button");
buttonCalcular.addEventListener("click", mult);

// Configura o evento do botão "Limpar"
const buttonLimpar = document.createElement("button");
buttonLimpar.textContent = "Limpar";
document.querySelector(".multiplicar").appendChild(buttonLimpar);
buttonLimpar.addEventListener("click", limpar);
