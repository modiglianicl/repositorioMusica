import { Router } from 'express';
import { home , agregarCancion, verCanciones,editCancion,removeCancion} from '../controllers/controller.js';

let router = Router()

router.get('/',home)

router.post('/cancion',agregarCancion)

router.get('/canciones',verCanciones)

router.put('/cancion/:id',editCancion)

router.delete('/cancion',removeCancion)

export {
    router
}