function costeTotal() {
   console.log("función costeTotal");
   let numeroEntradas = document.getElementById("numero").value;
  console.log("num entradas =" + numeroEntradas);
 let costeEntradas = (numeroEntradas * 20) + "€";
 console.log("coste = " + costeEntradas);
 document.getElementById("coste").innerHTML = costeEntradas;
}
function comprar() {
    console.log("-----funcion comprar");
  document.getElementById("nom").innerHTML = document.getElementById("nombre").value;
  document.getElementById("co").innerHTML = document.getElementById("correo").value;
  document.getElementById("num").innerHTML = document.getElementById("numero").value;
  document.getElementById("ct").innerHTML = document.getElementById("coste").innerHTML;
  let ValorExposicion = document.getElementById("exposicion").value;
  let nombreExposicion = "";
  if (ValorExposicion === "e1") {
    nombreExposicion= "Exposicion 1";
  } else if (ValorExposicion === "e2") {
    nombreExposicion= "Exposicion 2";
  } else { ValorExposicion === "e3";
    nombreExposicion= "Exposicion 3";

  }
     

  document.getElementById("ex").innerHTML = nombreExposicion;

 document.getElementById("modal").style.display = "flex";

    return false;
    
}
function cerrarVentana() {
   console.log("-------funcion cerrarVentana")  
   document.getElementById("modal").style.display = "none";
   window.location.href = "/index.html"
    }