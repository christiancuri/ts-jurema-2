import { IBGE } from "@utils";
import { IStatesIBGE, IPopulation, IPopulationIBGE } from "./interfaces";

async function getAllStates(uf: string = ""): Promise<IStatesIBGE[]> {
  return IBGE.get(`/api/v1/localidades/estados/${uf}`).then(({ data }) =>
    Array.isArray(data) ? data : [data],
  );
}

async function getPopulation(id: number): Promise<IPopulationIBGE> {
  return IBGE.get(`api/v1/projecoes/populacao/${id}`).then(({ data }) => data);
}

export async function getPopulationByUF(uf: string): Promise<IPopulation> {
  const [ibgeState]: IStatesIBGE[] = await getAllStates(uf);

  return {
    uf: ibgeState.sigla,
    populacao: (await getPopulation(ibgeState.id)).projecao.populacao,
  };
}
