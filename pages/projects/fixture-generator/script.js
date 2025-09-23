var numeros_descartados = [];

function agregarParticipante() {
  var fila_participante = document.getElementsByClassName("fila_participante");
  var numeroDeParticipantes = x.length;
  var tablerow = fila_participante[numeroDeParticipantes - 1].cloneNode(true);
  const tabla = document.getElementById("tabla_participantes");
  tabla.appendChild(tablerow);
  var boton = tablerow.getElementsByClassName("botonEliminar");
  console.log(boton);
  boton[0].disabled = false;
  reorganizarNumsPost();
}

function eliminarParticipante(toRemove) {
  toRemove.remove();
  reorganizarNumsPost();
}

function reorganizarNumsPost() {
  var numero = document.getElementsByClassName("numero");
  for (i = 0; i < numero.length; i++) {
    numero[i].textContent = i + 1;
  }
}

function Generar() {
  const ArrayParticipantes = [];
  var participante = document.getElementsByClassName("inputParticipante");
  for (i = 0; i < participante.length; i++) {
    ArrayParticipantes.push(participante[i].value);
  }
  //console.log(ArrayParticipantes);
  var Fechas = [];
  //alert("Generado");

  GenerarArrayParticipantes();
  GenerarCruces();
  ImprimirFechas();

  var botonExportar = document.getElementById("botonExportar");
  botonExportar.disabled = false;
}

function NumerosAleatorios() {
  var x = document.getElementsByClassName("inputParticipante");
  for (i = 0; i < x.length; i++) {
    var num = getRndInteger(1, x.length);
    //log every number into console
    //console.log(num);
  }
}

function GenerarCruces() {}

function ImprimirFecha(ArrayFechas) {
  for (i = 0; i < ArrayFechas.length; i++) {}
  var cruce_partido = document.createElement("p");
  cruce_partido.innerHTML = "este es un textodeprueba";
  const fixture = document.getElementById("fixture");
  fixture.appendChild(cruce_partido);
}

function DiseñarFixture() {}

function ExportarCSV() {}

function ExportarPNG() {}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DiscardRandomNumbers(min, max, banned_numbers = null) {
  banned_numbers = [];
  var output = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(output);
  if (banned_numbers.includes(output)) {
    DiscardRandomNumbers(min, max, banned_numbers);
  } else {
    banned_numbers.push(output);
  }
  return output;
}

function ShuffleNumbers(min, max, banned_numbers = []) {
  var output = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(output);
  if (banned_numbers.includes(output) && true) {
    //reemplazar el "true"
    ShuffleNumbers(min, max, banned_numbers);
  } else {
    banned_numbers.push(output);
    console.log(banned_numbers);
    return output;
  }
}

function NumDescartado(array1) {
  return array1.pop();
}

function Shuffle(array1, output_array = []) {
  getRndInteger(0, array1.length);
}
