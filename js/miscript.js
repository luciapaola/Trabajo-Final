let nombre=prompt("como te llamas");
alert("Bienvenida a mi pagin@ " + nombre  + " Gracias por entrar a la pagina web debuffets");

function logueo(){
    let usuario=document.getElementById("usuario").value;
    let pass=document.getElementById("pass").value;
    if(usuario=="admin" && pass=="1234"){
        alert("Ingreso autorizado");
        window.open("https://www.google.com/search?q=calculadora&rlz=1C1ALOY_esPE998PE998&oq=calculadora&aqs=chrome..69i57j0i131i433i512l8j0i131i433.4974j0j15&sourceid=chrome&ie=UTF-8", "_blank");
    }else{
        alert("Usuario o contraseña Incorrectos");
    }
 } 