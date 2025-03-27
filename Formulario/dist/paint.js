const cardEstudiantes = document.querySelector('#cardsEstudiantes');

const agregarEstudiantes = (name, lastName, mail, telefono, msn) =>{

    let persona = {
        nombre: name,
        apellido: lastName,
        correo: mail,
        telefono: telefono,
        mensaje: msn,
    }

    let text= `¿Está Seguro(a) ${persona.nombre} de enviar la petición?`
    modalAlerta(text,"aceptar", persona);
}

function modalAlerta(cadena, tipo, persona){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.setAttribute("class","textAlerta");

    texto.innerHTML = `<strong>${cadena}</strong>`;

    const btnCerrar = document.createElement("input");
    btnCerrar.setAttribute("type","button");
    btnCerrar.setAttribute("class","btnAlerta");
    btnCerrar.setAttribute("value","Cerrar");

    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo === "aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type","input");
        btnEnviar.setAttribute("class","btnAlerta");
        btnEnviar.setAttribute("value","Enviar");
        
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);

        btnEnviar.onclick = function(){
            pintarCard(persona, "estudiante");
            document.body.removeChild(alerta);
        };
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }
}

function pintarCard(datos, tipo){
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const template = document.getElementById('templateEstudiante').content;
    
    if(tipo === "ESTUDIANTE"){
        let cloneTemp = template.cloneNode(true);
        
        cloneTemp.querySelector(".title-card").innerHTML = "Datos del PQR <hr>";
        
        cloneTemp.querySelector(".data-card").innerHTML = `<strong>NOMBRE Y APELLIDOS: </strong> ${datos.nombre.toUpperCase()} ${datos.apellido.toUpperCase()} `;

        cloneTemp.querySelector(".text-mail").innerHTML = `<strong>CORREO ELECTRÓNICO: </strong> ${datos.correo}` ;
        cloneTemp.querySelector(".text-telefono").innerHTML = `<strong>TELÉFONO: </strong> ${datos.telefono}`;
        cloneTemp.querySelector(".text-msn").innerHTML = `<strong>MENSAJE: </strong> ${datos.mensaje}`;

        fragmento.appendChild(cloneTemp);
    }
    cardEstudiantes.appendChild(fragmento);
}

export {agregarEstudiantes, modalAlerta}