import express from 'express';
import { health } from './rest/health';
import { forward } from './rest/requestForward';
import { currentTime } from './rest/timeStamp';

const routes = express.Router();

routes.get('/', health);
routes.get('/current/time/ist', currentTime);
routes.post('/forward/telecrm', forward);

export default routes;