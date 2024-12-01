document.querySelector("#peso").focus();

document.querySelector('#calcular').addEventListener("click", event => {
    event.preventDefault();

    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    let resultado = document.querySelector("#resultado");
    let resultadoImc = document.querySelector("#resultadoImc");
    let mensagem = document.querySelector("#mensagem");

    resultado.innerHTML = "";

    resultado.innerHTML += `O IMC para o peso de <b>${peso}kg</b> e a altura de <b>${altura}m</b> é:`

    let imc = peso / (altura * altura);

    resultadoImc.innerHTML = imc.toFixed(2)

    if (isNaN(peso) || isNaN(altura)) {
        alert("Preencha os dois campos apenas com números separados por ponto ou vírgula.");
        resultado.style.display = "none"
        resultadoImc.style.display = "none"
    }
    if (imc <= 18.5) {
        mensagem.innerHTML = '<h3>Abaixo do Peso</h3><p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corAzul';
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        mensagem.innerHTML = '<h3>Peso Normal</h3><p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corVerde';
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        mensagem.innerHTML = '<h3>Sobrepeso</h3><p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corAmarelo';
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        mensagem.innerHTML = '<h3>Obesidade grau I</h3><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corLaranja';
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        mensagem.innerHTML = '<h3>Obesidade grau II</h3><p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corLaranja';
    }
    else if (imc >= 40.0) {
        mensagem.innerHTML = '<h3>Obesidade grau III</h3><p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>';
        resultado.style.display = "block";
        resultadoImc.style.display = "block";
        mensagem.style.display = "block";
        resultadoImc.className = 'corVermelho';
    }
})

document.querySelector('#limpar').addEventListener("click", () => {
    resultado.style.display = "none";
    resultadoImc.style.display = "none"
    mensagem.style.display = "none";
    document.querySelector("#peso").focus();
})