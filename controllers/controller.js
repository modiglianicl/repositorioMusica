import path from 'path';
import { insertarCancion, obtenerCanciones, editarCanciones, borrarCancion } from '../models/queries.js';

let __dirname = path.resolve()

let home = (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
}

let agregarCancion = async (req,res) => {
    let { titulo , artista , tono } = req.body;
    let response = await insertarCancion(titulo,artista,tono);
    res.send(response);
}

let verCanciones = async (req,res) => {
    let response = await obtenerCanciones();
    res.send(response);
}

let editCancion = async (req,res) => {
    let { id } = req.params;
    let { titulo, artista, tono } = req.body;
    let response = await editarCanciones(titulo, artista, tono, id);
    res.send(response);
}

let removeCancion = async (req,res) => {
    let { id } = req.query;
    let response = await borrarCancion(id);
    res.send(response);
}





export {
    home,
    agregarCancion,
    verCanciones,
    editCancion,
    removeCancion
}