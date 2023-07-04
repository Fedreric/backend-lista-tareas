import Tarea from '../models/producto'

// READ
export const obtenerTareas = async (request, response) => {
  try {
    const tareas = await Tarea.find()
    response.status(200).json(tareas)
  } catch (error) {
    console.log(error)
    response.status(404).json({
      message: 'Error al buscar las tareas'
    })
  }
}

// CREATE
export const crearTarea = async (request, response) => {
  try {
    const newTarea = new Tarea(request.body);
    await newTarea.save();
    response.status(201).json({
      message: 'Tarea creada con exito'
    })
  } catch (error) {
    console.log(error)
    response.status(404).json({
      message: 'Error al crear la tarea'
    })
  }
}

// DELETE
export const borrarTarea = async (request, response) => {
  try {
    await Tarea.findByIdAndDelete(request.params.id)
    response.status(200).json({
      message: 'Tarea eliminada con exito'
    })
  } catch (error) {
    console.log(error)
    response.status(404).json({
      message: 'Error al borrar la tarea'
    })
  }
}
// PUT
export const editarTarea = async (request, response) => {
  try {
    await Tarea.findByIdAndUpdate(request.params.id, request.body)
    response.status(200).json({
      message: 'Tarea modificada con exito'
    })
  } catch (error) {
    console.log(error)
    response.status(304).json({
      message: 'No se pudo editar la tarea'
    })
  }
}
