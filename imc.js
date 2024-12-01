document.querySelector("#peso").focus(); // faz com que o cursor fique ativo no campo de digitar o peso

document.querySelector('#calcular').addEventListener("click", event => { // função que aciona o sistema ao clicar no botão CALCULAR
    event.preventDefault();

    //Variáveis que capturam os valores de entradas e saída
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);

    //variáveis que exibirão nos elementos HTML exibir resultados e mensagens explicativas
    let resultado = document.querySelector("#resultado");
    let resultadoImc = document.querySelector("#resultadoImc");
    let mensagem = document.querySelector("#mensagem");

    resultado.innerHTML = ""; // Limpa a div resultado caso o botão CALCULAR seja pressioando mais de uma vez

    resultado.innerHTML += `O IMC para o peso de <b>${peso}kg</b> e a altura de <b>${altura}m</b> é:` // exibeas informações de peso e algura digitados

    let imc = peso / (altura * altura); // Cálcula o IMC = peso dividido por altura multiblicado por altura novamente.

    resultadoImc.innerHTML = imc.toFixed(2)

    if (isNaN(peso) || isNaN(altura)) { // Verifica se os campos de peso e altura estão preenchidos
        alert("Preencha os dois campos apenas com números separados por ponto ou vírgula.");
        resultado.style.display = "none"
        resultadoImc.style.display = "none"
    }
    if (imc <= 18.5) { //exibe a mensagem de abaixo do peso caso o resultado do IMC seja menor que 18.5
        mensagem.innerHTML = '<h3>Abaixo do Peso</h3><p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corAzul';
    }
    else if (imc >= 18.6 && imc <= 24.9) {//exibe a mensagem de peso ideal caso o resultado do IMC seja entre 18.6 e 24.9
        mensagem.innerHTML = '<h3>Peso Normal</h3><p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corVerde';
    }
    else if (imc >= 25.0 && imc <= 29.9) { //exibe a mensagem de sobre peso caso o resultado do IMC seja entre 25.0 e 29.9
        mensagem.innerHTML = '<h3>Sobrepeso</h3><p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corAmarelo';
    }
    else if (imc >= 30.0 && imc <= 34.9) { //exibe a mensagem de Obesidade grau I caso o resultado do IMC seja entre 30.0 e 34.9
        mensagem.innerHTML = '<h3>Obesidade grau I</h3><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corLaranja';
    }
    else if (imc >= 35.0 && imc <= 39.9) { //exibe a mensagem de Obesidade grau II caso o resultado do IMC seja entre 35.0 e 39.9
        mensagem.innerHTML = '<h3>Obesidade grau II</h3><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corLaranja';
    }
    else if (imc >= 40.0) {  //exibe a mensagem de Obesidade grau III caso o resultado do IMC seja acima de 40.0
        mensagem.innerHTML = '<h3>Obesidade grau III</h3><p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corVermelho';
    }
})

document.querySelector('#limpar').addEventListener("click", () => { // função que limpa a tela ao clicar no botão LIMPAR
    resultado.style.display = "none";
    resultadoImc.style.display = "none"
    mensagem.style.display = "none";
    document.querySelector("#peso").focus();
})