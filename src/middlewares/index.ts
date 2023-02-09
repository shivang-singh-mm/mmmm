import express from 'express';

import { bodyParser } from './body-parser';

const middlewares = [
  bodyParser
]

export default middlewares;