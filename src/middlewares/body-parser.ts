import { Express, json } from "express"
export const bodyParser = (app: Express) => {
  app.use(json())
}