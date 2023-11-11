// valor del ticket
const ticket = 200;

// descuentos
let descMenores = 0.80;
let descJubilados = 0.50;
let descEstudiante = 0.15;

// obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const btnComprar = document.getElementById('comprar');

// funcion para calcular
function calcularPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "Menores":
            total = total - (total * descMenores);
            break;
        case "Jubilados":
            total = total - (total * descJubilados);
            break;
        case "Estudiante":
            total = total - (total * descEstudiante);
            break;
    }
    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click', (evento) => {
    evento.preventDefault();
    calcularPago();
});

btnComprar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarFormulario()) {
        procesarCompra();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const cantidad = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;

    if (nombre === '' || apellido === '' || correo === '' || cantidad === '' || categoria === '') {
        return false;
    }

    // Puedes agregar más lógica de validación según tus necesidades

    return true;
}

function procesarCompra() {
    // Aquí puedes colocar la lógica para procesar la compra
    // Puedes llamar a la función calcularPago() u otras operaciones necesarias
    calcularPago();
    alert('Compra realizada con éxito. ¡Gracias!');
}
