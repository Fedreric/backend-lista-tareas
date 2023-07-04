import { Router } from 'express';
import { borrarTarea, crearTarea, editarTarea, obtenerTareas } from '../controllers/tareas.controllers';

const router = Router();

// app.get('/prueba', (_request, response) => {
//     response.send('Solicitud get al backend')
// });

router.route('/tareas').get(obtenerTareas).post(crearTarea)
router.route('/tareas/:id').delete(borrarTarea).put(editarTarea)

export default router;
