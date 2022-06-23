
//*********************************SIMULADOR DE DEFINICIONES DE DIFERENTES TIPOS DE BUGS***************************

//**********************ESTE ARRAY CONTIENE LOS TIPOS DE PRUEBAS MAS FRECUENTES EN EL TESTING DE SOFTWARE**********
class tipoDePrueba{
  constructor(id, nombre, prioridad, dispositivo, funcional){
      this.id = id;
      this.nombre = nombre;
      this.prioridad = prioridad;
      this.dispositivo = dispositivo;
      this.funcional = funcional;
  }
}
const pruebas = [];


//*********************************FUNCION PARA DARLE LA BIENVENIDA AL USUARIO*************************************
let nombre =prompt("Como te llamas?");

function saludar (){
  alert ("Buen dia " + nombre + "," + " acompañame para aprender algo sobre testing de software")
}
//*********************************FUNCION PARA DESPEDIRSE DEL USUARIO**********************************************
function despedir(){
  alert ("Gracias por visitarnos " + nombre + "." +" Al finalzar pordra ver un reporte de sus consultas en pantalla. " + " Para saber mas sobre testing visita nuestra web: patagoniawise.tech")
}
saludar() //INVOCACION DE LA FUNCION DEDICADA A SALUDAR AL USUARIO

//***********************************INGRESO DE DATOS POR PARTE DEL USUARIO****************************************
let ingreso = prompt(
    "Elige que tipo de bug deseas conocer: \n\n 1-Heisenbug \n 2-Bohrbug \n 3-Mandelbug \n 4-Schroedinbug \n 5-Fantasma \n\n Para salir ingresa CHAU"
  );
  if (ingreso == "CHAU") despedir(); //INVOCACION DE LA FUNCION DEDICADA A DESPEDIR AL USUARIO

//*********************************BUCLE QUE DEVOLVERA LAS DEFINICIONES ELEGIDAS EN CADA CASO***********************  
  while (ingreso != "CHAU") {
    switch (ingreso) {
      case "1":
        pruebas.push(new tipoDePrueba(1,"PRUEBA DE STRESS", 1 , "DISPOSITIVO: DESKTOP", false));//Agregando el dato ingresado en un Array
        alert("En jerga de programación, un heisenbug es un tipo de bug que parece desaparecer o comportarse de otro modo al intentar ser observado en detalle.El término es un juego de palabras a partir del nombre de Werner Heisenberg, el físico que dedujo el efecto de observación de la mecánica cuántica, según el cual el mero hecho de observar un sistema de una manera determinada altera el estado de este. ");
        break;
      case "2":
        pruebas.push(new tipoDePrueba(2, "PRUEBA DE INTEGRACION", 2 , "DISPOSITIVO: MOBILE", true));//Agregando el dato ingresado en un Array
        alert("Bohrbug. Estos tipos de bugs, llamados así por el modelo atómico de Bohr, son un tipo de error que se encuentra en las antípodas del heisenbug. Es decir, son las fallas informáticas que mantienen su comportamiento sin importar lo que se haga para eliminarlo.");
        break;
      case "3":
        pruebas.push(new tipoDePrueba(3,"PRUEBA ESTATICA", 3 , "DISPOSITIVO: TODOS", false));//Agregando el dato ingresado en un Array
        alert("Un Mandelbug (del apellido de Benoît Mandelbrot, matemático famoso por su estudio de fractales) es un bug tan complejo que no se puede encontrar una manera de eliminarlo, o cuyo efecto parece caótico y parece no determinista.");
        break;
      case "4":
        pruebas.push(new tipoDePrueba(4,"PRUEBA DE REGRESION", 4 , "DISPOSITIVO: DESKTOP", true));//Agregando el dato ingresado en un Array
        alert("Schroedinbug es un tipo inusual de error de software que logra pasar los controles de calidad iniciales y solo se encuentra cuando alguien lee manualmente el código del software y se da cuenta de que el programa no debería, y nunca debería haber podido funcionar en primer lugar.");
        break;
      case "5":
        pruebas.push(new tipoDePrueba(5,"PRUEBA DE ACEPTACION", 5 , "DISPOSITIVO: MOBILE", true));//Agregando el dato ingresado en un Array
        alert("Fantasma es un bug que suele esconderse en esas rutinas o subprogramas que rara vez se ejecutan. Su ubicación los hace muy difíciles de identificar durante las pruebas previas al lanzamiento del programa, y puede hacer que un producto fracase estrepitosamente al ser puesto a la venta.");
        break;
  
      default:
        alert("Opción no válida");
        break;
    }
    console.log(pruebas);

    
 //*******************************SE REALIZA UN FILTRADO (FILTER) SOBRE LOS TIPOS DE PRUEBAS, MOSTRANDO LAS DE PRIORIDAD MENOR A 4 *****************************************
   
 let filtrado = pruebas.filter((el) =>{
      return el.prioridad <= 3;
    });
    console.log(filtrado);             //SE MUESTRA UN ARRAY CON LOS TIPOS DE PRUEBAS QUE TIENEN UNA PRIORIDAD MENOR A 4


    //*******************************EL USUARIO PUEDE VOLVER A INGRESAR DATOS*****************************************
    ingreso = prompt(
      "Ingresa una opción \n 1-Heisenbug \n 2-Bohrbug \n 3-Mandelbug \n 4-Schroedinbug \n 5-Fantasma \n\n Para salir ingresa CHAU"
    );
    if (ingreso == "CHAU") despedir();   //INVOCACION DE LA FUNCION DEDICADA A DESPEDIR AL USUARIO
  } 


//*******************************MODIFICANDO EL DOM DE FORMA INTERACTIVA*****************************************
for (const prueba of pruebas) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${prueba.nombre}</h2>
                   <p>${prueba.prioridad} / ${prueba.dispositivo}</p>
                   <button id='${prueba.id}'>SABER MAS</button>
                   <hr>`;
  
  
                   document.body.appendChild(div);
}

//******************************************INCORPORANDO EL EVENTO LISTENER CLICK AL BOTON VISITA NUESTRA WEB */
const btnWeb = document.createElement("button");
btnWeb.id = 'btnNucleo';
btnWeb.innerHTML = 'VISITA NUESTRA WEB';
btnWeb.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'https://patagoniawise.com/';
    document.body.appendChild(h3);
})
document.body.appendChild(btnWeb); 