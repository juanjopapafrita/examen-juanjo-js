
var sueldo = 1135000;
var valorHoraExtraDiurna = 6000;
var valorHoraExtraNocturna = 8000;

var horasExtrasDiurnas = prompt("Ingrese la cantidad de horas extras diurnas trabajadas :P :");
var horasExtrasNocturnas = prompt("Ingrese la cantidad de horas extras nocturnas trabajadas :P :");


horasExtrasDiurnas = parseInt(horasExtrasDiurnas);
horasExtrasNocturnas = parseInt(horasExtrasNocturnas);

var totalHorasExtrasDiurnas = horasExtrasDiurnas * valorHoraExtraDiurna;
var totalHorasExtrasNocturnas = horasExtrasNocturnas * valorHoraExtraNocturna;


var salarioTotal = sueldo + totalHorasExtrasDiurnas + totalHorasExtrasNocturnas;


console.log("Sueldo base: $" + sueldo);
console.log("Horas extras diurnas trabajadas: " + horasExtrasDiurnas);
console.log("Horas extras nocturnas trabajadas: " + horasExtrasNocturnas);
console.log("Total a pagar por horas extras diurnas: $" + totalHorasExtrasDiurnas);
console.log("Total a pagar por horas extras nocturnas: $" + totalHorasExtrasNocturnas);
console.log("Salario total a pagar: $" + salarioTotal);


if (horasExtrasDiurnas + horasExtrasNocturnas > 20) {
  console.log("¡El empleado ha trabajado muchas horas extras este mes!");
}
