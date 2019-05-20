const opciones = {
   nombre: {
       alias: 'n',
       demand: true
   },

    matematicas:{
        default: 0,
        alias: 'm'
    },
    ingles:{
        default: 0,
        alias: 'i'
    },
    programacion:{
        demand: true, //para no colocar 0 por defecto se pide como requerido 
        alias: 'p'
    }
     
}

let obtenerPromedio = (notaUno, notaDos, notaTres) => (notaUno + notaDos + notaTres)/3;

const argv = require('yargs').command('promedio', 'Calcular el promedio', opciones).argv

module.exports = {
    estudiante,
    obtenerPromedio
};