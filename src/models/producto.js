import { Schema, model } from 'mongoose';

const tareaSchema = new Schema({
  tarea: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  }
})

const Tarea = model('tarea', tareaSchema);

export default Tarea;
