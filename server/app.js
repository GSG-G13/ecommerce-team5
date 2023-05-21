import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { join } from 'path';

import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');

app.use(express.static(join('..', 'client', 'build')));

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

export default app;
