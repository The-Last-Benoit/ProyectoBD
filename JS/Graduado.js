
//console.log("Width: " + window.innerWidth + "px");
//console.log("Height: " + window.innerHeight + "px");

const codigoAlumno=document.getElementById("codigoAlumno")
const codigoTesis=document.getElementById("codigoTesis")

const nombres=document.getElementById("nombres")
const titulo=document.getElementById("titulo")

const apellidos=document.getElementById("apellidos")
const asesor=document.getElementById("asesor")

const carrera=document.getElementById("carrera")
const investigacion=document.getElementById("investigacion")

const telefono=document.getElementById("telefono")
const grado=document.getElementById("grado")




const warningsDiv = document.getElementById("warnings")
const warningsDiv2 = document.getElementById("warnings2")
const warningsDiv3 = document.getElementById("warnings3")
const warningsDiv4 = document.getElementById("warnings4")

const warningsDiv5 = document.getElementById("warnings5")
const warningsDiv6 = document.getElementById("warnings6")
const warningsDiv7 = document.getElementById("warnings7")
const warningsDiv8 = document.getElementById("warnings8")

const warningsDiv9 = document.getElementById("warnings9")
const warningsDiv10 = document.getElementById("warnings10")

function validarNomApeAse(campo, warningsDiv, minLength=7,texto) {
  texto = texto || "nombres";
  const form = document.getElementById("miFormulario");
  form.addEventListener("submit", e => {
      e.preventDefault();
      let warning = "";
      

      if (campo.value.length < minLength) {
        warning = `Ingrese ambos ${texto} (${minLength} letras minimo).<br>`;
        warningsDiv.innerHTML = warning;
        
        return false;
      }

      let numeros = "0123456789";
      for (let i = 0; i < nombres.value.length; i++) {
        if (numeros.indexOf(nombres.value.charAt(i)) !== -1) {
          warning = 'Evite ingresar numeros.<br>';
          warningsDiv.innerHTML = warning;
          
          return false; // Salir del bucle si se encuentra un número
          }
                }
             
                warningsDiv.innerHTML = warning;
   
    });
}    


function validarcodAlumTel(campo, warningsDiv, Length=7,warning) {
  const form = document.getElementById("miFormulario");
  warning = warning || "";
  form.addEventListener("submit", e => {
      e.preventDefault();
      let warningg = "";
      

      if (campo.value.length != Length) {
        warningsDiv.innerHTML = warning;
        
        return false;
      }

      let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 0; i < codigoAlumno.value.length; i++) {
        if (letras.indexOf(codigoAlumno.value.charAt(i)) !== -1) {
          warning = 'Evite ingresar letras aqui.<br>';
          warningsDiv.innerHTML = warningg;
          
          return false; // Salir del bucle si se encuentra un número
              }
        }
        
        });
      }


      
function validarTitCot(campo, warningsDiv,maxLenght) {
  const form = document.getElementById("miFormulario");
  form.addEventListener("submit", e => {
      e.preventDefault();
      let warning = "";
      
      

      if (campo.value.length < 1) {
        warning = 'Ingrese al menos 1 caracter.<br>';
        warningsDiv.innerHTML = warning;
         
        return false;
      }

      if (campo.value.length > maxLenght) {
        warning = `No ingrese mas de ${maxLength} caracteres.<br>`;
        warningsDiv.innerHTML = warning;

        return false;
      }

    warningsDiv.innerHTML = warning;
    });
}
function validarSelect(campo, warningsDiv){
  const form = document.getElementById("miFormulario");
  form.addEventListener("submit", e => {
    e.preventDefault
    
    if(campo.value===""){
      warning = 'Esta no es una alternativa.<br>';
      warningsDiv.innerHTML = warning;
      
      return false
    }
    
  }
)};

function validarFormulario(){
  const form = document.getElementById("miFormulario");
  form.addEventListener("submit", e => {
    e.preventDefault
    if((validarNomApeAse(nombres,warningsDiv3,8)& validarNomApeAse(apellidos,warningsDiv5,10,"apellidos")
      &validarNomApeAse(asesor,warningsDiv6,8)& validarTitCot(35) &validarTitCot(20)
      &validarcodAlumTel(codigoAlumno,warningsDiv,10,"El codigo alumnno solo debe tener 10 numeros")
      &validarcodAlumTel(telefono,warningsDiv9,9,"El telefono solo debe tener 9 numeros") 
      &validarSelect(carrera,warningsDiv7)&validarSelect(investigacion,warningsDiv8)&validarSelect(grado,warningsDiv10))==true )
      {
         form.submit()
      }

    })}
  validarNomApeAse(nombres,warningsDiv3,8)
  validarNomApeAse(apellidos,warningsDiv5,10,"apellidos")
  validarNomApeAse(asesor,warningsDiv6,8)

  validarTitCot(titulo,warningsDiv4,35)
  validarTitCot(codigoTesis,warningsDiv2,20)

  validarcodAlumTel(codigoAlumno,warningsDiv,10,"El codigo alumnno solo ¡debe tener 10 numeros")
  validarcodAlumTel(telefono,warningsDiv9,9,"El telefono solo debe tener 9 numeros") 

  validarSelect(carrera,warningsDiv7)
  validarSelect(investigacion,warningsDiv8)
  validarSelect(grado,warningsDiv10)

  validarFormulario()
  
    
