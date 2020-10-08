import express from "express";
import * as controller from "./controller";
import { CatchErrors } from "@utils";
export default express
  .Router()
  .get("/:uf", CatchErrors(controller.getPopulationByUf));
