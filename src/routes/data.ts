import { Router } from "express";
import { dayofmounth, mounth, year } from "../controllers/date";

const routes = Router();

routes.get("/dia", dayofmounth);
routes.get("/mes", mounth);
routes.get("/ano", year);

export default routes;