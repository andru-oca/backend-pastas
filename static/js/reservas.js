function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cantidad = document.getElementById("cantidad").value;
    var fecha = document.getElementById("fecha").value;
    var horario = document.getElementById("horario").value;
    var celular = document.getElementById("celular").value;

    var error = false;

    if (name === "") {
      document.getElementById("name").classList.add("error");
      error = true;
    } else {
      document.getElementById("name").classList.remove("error");
    }

    if (celular === "") {
      document.getElementById("celular").classList.add("error");
      error = true;
    } else {
      document.getElementById("celular").classList.remove("error");
  }

    if (email === "") {
      document.getElementById("email").classList.add("error");
      error = true;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    if (cantidad === "") {
        document.getElementById("cantidad").classList.add("error");
        error = true;
      } else {
        document.getElementById("cantidad").classList.remove("error");
    }

    if (fecha === "") {
      document.getElementById("fecha").classList.add("error");
      error = true;
    } else {
      document.getElementById("fecha").classList.remove("error");
    }

    if (horario === "") {
      document.getElementById("horario").classList.add("error");
      error = true;
    } else {
      document.getElementById("horario").classList.remove("error");
   }

    if (error) {
      return false; // Evita enviar el formulario si hay errores
    }
  }