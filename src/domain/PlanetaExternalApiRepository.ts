import { Planeta } from "./Planeta";

export interface PlanetaExternalApiRepository {
    obtenerPlaneta(id:string) : Promise<Planeta>;
}