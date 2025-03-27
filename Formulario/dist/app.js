import { modalAlerta, agregarEstudiantes } from "./paint.js";

const btnEnviar = document.querySelector('#btn-enviar');

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#name').value.trim();
    const apellido = document.querySelector('#last-name').value.trim();
    const correo = document.querySelector('#mail').value.trim();
    const telefono = document.querySelector('#telphone').value.trim();
    const mensaje = document.querySelector('#msn').value.trim();

    if (!validarNombre(nombre)) {
        modalAlerta("El nombre solo debe contener letras y espacios.", "error");
        return;
    }
    if (!validarApellido(apellido)) {
        modalAlerta("El apellido solo debe contener letras y espacios.", "error");
        return;
    }
    if (!validarCorreo(correo)) {
        modalAlerta("Correo electrónico inválido. Debe tener el formato correcto.", "error");
        return;
    }
    if (!validarTelefono(telefono)) {
        modalAlerta("El número de teléfono debe contener entre 7 y 15 dígitos. Además no puede tener letras", "error");
        return;
    }
    if (!validarMensaje(mensaje)) {
        modalAlerta("El mensaje no puede estar vacío.", "error");
        return;
    }

    agregarEstudiantes(nombre, apellido, correo, telefono, mensaje);
});

function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre);
}

function validarApellido(apellido) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(apellido);
}

function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

function validarTelefono(telefono) {
    const regex = /^[0-9]{7,15}$/;
    return regex.test(telefono);
}

function validarMensaje(mensaje) {
    return mensaje.length > 0;
}
