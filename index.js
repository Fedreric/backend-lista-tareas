import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import './src/database/dbConnection'
import rutas from './src/routes/tareas.routes'

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el port: ' + app.get('port'))
});

//  middelwars

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // permite recibir strings y arrays en el request
app.use(morgan('dev'));

//  rutas

app.use('/apiListaTareas', rutas);
