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

    totalPagar.textContent = `Total a Pagar: $ ${total}`
}

let flecha = () => { }

btnResumen.addEventListener('click', (evento) => {
    evento.preventDefault();
    calcularPago();
});
