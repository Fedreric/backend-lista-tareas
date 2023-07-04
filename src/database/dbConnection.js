import { connect } from 'mongoose';
import { MONGODB_URI } from '../config';

(async () => {
  try {
    const db = await connect(MONGODB_URI, { family: 4 });
    console.log(`DB conectada ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
})();
