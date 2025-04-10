let nombre;
let apellido;

function visualizar(){
    nombre = document.querySelector("#nombre").value;
    apellido = document.querySelector("#apellido").value;
    console.log(`Este elemento es: ${nombre}`);
    console.log(`Este elemento es: ${apellido}`);
    document.querySelector("#contndorResultd").innerHTML = `<h2>Hola ${nombre} ${apellido}</h2>`;}   
