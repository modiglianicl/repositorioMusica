import { pool } from "../config/db.js";

let insertarCancion = async (titulo,artista,tono) => {
    try {
        let sql = {
            text : "INSERT INTO canciones (titulo,artista,tono) VALUES ($1,$2,$3) RETURNING *",
            values : [titulo,artista,tono]
        }
        let result = await pool.query(sql);
        if (result.rowCount >  1) {
            return result.rows;
        } else {
            return new Error("Algo ocurrió, no se hizo nada")
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);
    }
}

let obtenerCanciones = async () => {
    try {
        let sql = {
            text : "SELECT * FROM canciones"
        }
        let result = await pool.query(sql);
        if (result.rowCount >  1) {
            return result.rows;
        } else {
            return new Error("Algo ocurrió, no se hizo nada")
        } 
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);
    }
    
}

let editarCanciones = async (titulo, artista, tono, id) => {
    try {
      let sql = {
        text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
        values: [titulo, artista, tono, id],
      };
      let result = await pool.query(sql);
      if (result.rowCount > 0) {
        return result.rows;
      } else {
        console.log("No se pudo editar la canción");
      }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);
    }
  };

let borrarCancion = async (id) => {
    try {
        let sql = {
            text : "DELETE FROM canciones WHERE id = $1",
            values : [id]
        }
        let result = await pool.query(sql);
        if (result.rowCount > 0) {
            return result.rows;
          } else {
            console.log("No se pudo editar la canción");
          }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);
    }
}


export {
    insertarCancion,
    obtenerCanciones,
    editarCanciones,
    borrarCancion
}