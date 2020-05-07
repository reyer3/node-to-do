const argv = require('./config/yargs').argv;
const { crear, getListado, actualizarTarea, borrarTarea } = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado()
        for (const tarea of listado) {
            console.log('==========Tarea==========='.green)
            console.log(tarea.descripcion)
            console.log('Estado', tarea.completado)
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        let actualizacion = actualizarTarea(argv.d, argv.c);
        console.log(actualizacion);
        break;

    case 'borrar':
        let borrado = borrarTarea(argv.d);
        console.log(borrado);
        break;


    default:
        console.error("Comando no es reconocido");
        break;
}