import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './db/index.js';
dotenv.config({ path: '/.env' });

connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch(error => console.log(error.message));
