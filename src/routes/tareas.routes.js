import { Router } from 'express';
import { crearTarea, obtenerTareas } from '../controllers/tareas.controllers';

const router = Router();

// app.get('/prueba', (_request, response) => {
//     response.send('Solicitud get al backend')
// });

router.route('/tareas').get(obtenerTareas).post(crearTarea)

export default router;
