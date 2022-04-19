import express from 'express';
import { routes } from './routes/Routes';

const app = express();

app.use(routes);

app.listen(3333);

console.log('Server running in http://localhost:3333');