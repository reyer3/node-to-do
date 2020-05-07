const fs = require('fs');

let ListadoPorHacer = [];


const Guardardb = () => {
    let data = JSON.stringify(ListadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}
const Cargardb = () => {
    try {
        ListadoPorHacer = require('../db/data.json')
        return ListadoPorHacer;

    } catch (error) {
        ListadoPorHacer = [];
    }
}


const crear = (descripcion) => {
    Cargardb();
    let porhacer = {
        descripcion,
        completado: false
    }

    ListadoPorHacer.push(porhacer);
    Guardardb();
    return porhacer;
}

let getListado = () => {

    Cargardb();
    return ListadoPorHacer
}


let actualizarTarea = (descripcion, completado) => {
    Cargardb();
    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // console.log(index);
    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        Guardardb();
        return true;
    } else {
        return false;
    }


}
let borrarTarea = (descripcion) => {
    Cargardb();
    let filtered = ListadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (ListadoPorHacer.length === filtered.length) {
        return false
    } else {
        ListadoPorHacer = filtered;
        Guardardb();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrarTarea
}