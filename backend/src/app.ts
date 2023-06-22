import express from 'express';
import { initialize } from './initialize';
import router from './routes';

const app = express();
initialize(app);

app.use(router);

export default app;