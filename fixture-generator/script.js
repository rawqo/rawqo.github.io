var numeros_descartados = []

function agregarParticipante() {
    var x = document.getElementsByClassName("fila_participante");
    var num = x.length;
    var tablerow = x[num-1].cloneNode(true);
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

function reorganizarNumsPost(){
    var x = document.getElementsByClassName("num");
    for(i=0; i<x.length; i++){
        x[i].textContent = i+1;
    }
}

function Generar(){
    const ArrayParticipantes =  [];
    var x = document.getElementsByClassName("inputParticipante");
    for(i=0; i<x.length; i++){
        ArrayParticipantes.push(x[i].value);
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

function NumerosAleatorios(){
    var x = document.getElementsByClassName("inputParticipante");
    for(i=0; i<x.length; i++){
        var num = getRndInteger(1, x.length);
        //log every number into console
        //console.log(num);
    }
}

function GenerarCruces(){

}

function ImprimirFecha(ArrayFechas){
    for(i=0; i<ArrayFechas.length; i++){
    }
    var cruce_partido = document.createElement('p');
    cruce_partido.innerHTML = "este es un textodeprueba";
    const fixture = document.getElementById("fixture");
    fixture.appendChild(cruce_partido);
}

function DiseñarFixture(){

}

function ExportarCSV(){
    
}

function ExportarPNG(){

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function DiscardRandomNumbers(min, max, banned_numbers = null){
    banned_numbers = [];
    var output = Math.floor(Math.random() * (max - min + 1) ) + min
    console.log(output);
    if(banned_numbers.includes(output)){
        DiscardRandomNumbers(min, max, banned_numbers);
    }
    else{
        banned_numbers.push(output);
    }
    return output;
}

function ShuffleNumbers(min, max, banned_numbers = []){
    var output = Math.floor(Math.random() * (max - min + 1) ) + min
    console.log(output);
    if(banned_numbers.includes(output) && (){
        ShuffleNumbers(min, max, banned_numbers);
    }
    else{
        banned_numbers.push(output);
        console.log(banned_numbers);
        return output;
    }
}

function NumDescartado(array1){
    return array1.pop();
}

function Shuffle(array1, output_array = []){
    getRndInteger(0, array1.length);
}