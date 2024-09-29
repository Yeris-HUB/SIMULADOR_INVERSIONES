let MontoInicial = parseFloat(prompt('Ingrese el monto inical de la inversion'));
let InterésAnual =  parseFloat(prompt('Ingrese la tasa de interés Anual'));
let NumAños =  parseFloat(prompt('Ingrese el número de años de la inversion'));
let MontoFinal = MontoInicial;

console.log('***SIMULADOR DE INVERSIONES CON INTERÉS COMPUESTO***');
console.log(`-Monto inicial: ${MontoInicial}`);
console.log(`-Tasa de interés: ${InterésAnual}%`)

for (let index = 1; index <= Math.floor(NumAños); index++) {
    MontoFinal = MontoFinal * ( 1 + InterésAnual /100);
    console.log(`Año ${index}: Monto = ${MontoFinal.toFixed(2)}`);
}

// Cálculo del monto para el último año parcial, si lo hay
let Fraccionaria = NumAños % 1;
if (Fraccionaria > 0) {
    MontoFinal = MontoFinal * (1 + (InterésAnual / 100) * Fraccionaria);
    console.log(`Año parcial (por ${Fraccionaria.toFixed(2)} de año): Monto = $${MontoFinal.toFixed(2)}`);
}

let Beneficio = MontoFinal - MontoInicial;


console.log(`MONTO FINAL DESPUÉS DE LOS ${NumAños} AÑOS: $ ${MontoFinal.toFixed(2)}`);
console.log(`TOTAL DE GANANCIAS: $ ${Beneficio.toFixed(2)}`);
