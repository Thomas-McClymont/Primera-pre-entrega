function Bienvenidos(){
    console.log("Bienvenidos a Turnos Ya")
}

for (let i = 1; i <= 1; i++){
    let nombre = prompt("Ingrese su nombre y apellido: ")
    while(nombre == ""){
        alert("No ha ingresado el campo requerido")
        nombre = prompt("Ingrese su nombre y apellido: ")
    }
    let campo = prompt("Ingrese su campo de atención")
    while(campo == ""){
        alert("No ha ingresado el campo requerido")
        campo = prompt("Ingrese su campo de atención")
    }
    alert("Turno Nº" + " " + i + " " + "Nombre:" + " " + nombre + ", Especialidad:" + " " + campo)
    if(i<=3){
        alert("Estaremos con usted en los proximos minutos")
    }
    else if(i<=7){
        alert("Estaremos con usted en los proximos 10 minutos")
    }
    else if(i<=10){
        alert("Estaremos con usted en los proximos 20 minutos")
    }
    
}
Bienvenidos();x