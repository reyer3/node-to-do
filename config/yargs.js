let descripcion = {
    demmand: true,
    alias: 'd'
}
let completado = {
    demmand: true,
    alias: 'c',
    default: true

}


const argv = require('yargs')
    .command('listar', 'Lista las tareas grabadas en el archivo, por defecto muestra las tareas por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea de la base de datos', {
        descripcion
    })
    .command('crear', 'Crea una tarea por hacer', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}