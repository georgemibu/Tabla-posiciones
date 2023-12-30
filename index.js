// Definir el array de items con sus puntajes
let items = [
    { nombre: 'River', puntaje: 33 },
    { nombre: 'Boca', puntaje: 30 },
    { nombre: 'San Lorenzo', puntaje: 15 },
    { nombre: 'Unión', puntaje: 22 },
    { nombre: 'Colón', puntaje: 21 },
    { nombre: 'Talleres', puntaje: 11 },
    { nombre: 'Racing', puntaje: 32 },
    { nombre: 'Independiente', puntaje: 24 },
    { nombre: 'Central', puntaje: 18 },
    { nombre: 'Defensa y Justicia', puntaje: 19 },
];

// Ordenar el array por puntaje de forma descendente
items.sort(function(a, b) {
    return b.puntaje - a.puntaje;
});

// Mostrar el ranking de los primeros 10 items
for (let i = 0; i < 10 && i < items.length; i++) {
    console.log('Posición ' + (i + 1) + ': ' + items[i].nombre + ' - Puntaje: ' + items[i].puntaje);
}
