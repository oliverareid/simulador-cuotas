let montoIngresado;
let cuotasIngresadas;
let alicuotaIngresada;

let boton = document.getElementById("btnCalcular");

let inputMonto = parseInt(document.getElementById("input-monto"));
let inputCuotas = parseInt(document.getElementById("input-cuotas"));
let inputAlicuota = parseInt(document.getElementById("input-alicuota"));

inputMonto.oninput = () => {montoIngresado = inputMonto.value};
inputCuotas.oninput = () => {cuotasIngresadas = inputCuotas.value};
inputAlicuota.oninput = () => {alicuotaIngresada = inputAlicuota.value};

boton.addEventListener("click", mostrarResultado);

function calcularCuotas (montoIngresado, cuotasIngresadas) {
      
    let totalMes = 0;
    if (montoIngresado > 0) {
        totalMes = montoIngresado / cuotasIngresadas;
    }
    const tasasIVA = [0, 10.5, 21];
    let totalMesMasIVA = 0;
    if (tasasIVA.includes(alicuotaIngresada)){
        totalMesMasIVA = totalMes + (totalMes * (alicuotaIngresada/100));
    } else {
        alert("Error al ingresar la alícuota")
    }
    return totalMesMasIVA;
}

function mostrarResultado(){
    alert(calcularCuotas(montoIngresado, cuotasIngresadas));
}

let subtitulo = document.getElementById("explicacion");
subtitulo.innerHTML = "<h5>Este es un simulador de cuotas, en el cual usted debe ingresar el monto de su compra, luego la cantidad de cuotas en las que va a pagar el producto, y por último, la alícuota de IVA que le corresponda, siendo 21% para consumidores finales, 10,5% para determinados rubros o 0 si es IVA exento</h5>"

