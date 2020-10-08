import * as service from "./service";
import { Request, Response } from "express";

import { IPopulation } from "./interfaces";

export async function getPopulationByUf(
  req: Request,
  res: Response,
): Promise<Response> {
  const {
    params: { uf },
  } = req;
  return service
    .getPopulationByUF(uf)
    .then((population: IPopulation) => res.json(population));
}
