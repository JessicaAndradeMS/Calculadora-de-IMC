function calcularImc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

    document.getElementById("resultado").textContent = `Seu IMC é: ${imc.toFixed(1)}`;
}