import { Planeta } from "./Planeta";

export interface PlanetaRepository {
    obtenerPlaneta(id: string): Promise<Planeta>;
    crearPlaneta(planeta: Planeta): Promise<void>;
}