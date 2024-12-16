import { Planeta } from "../domain/Planeta";
import { PlanetaRepository } from "../domain/PlanetaRepository";

export class PlanetaService{
    constructor(private planetaRepository: PlanetaRepository) { }
    async obtenerPlaneta(id: string): Promise<Planeta> {
        return this.planetaRepository.obtenerPlaneta(id);
    }
    async crearPlaneta(planeta: Planeta): Promise<void> {
        return this.planetaRepository.crearPlaneta(planeta);
    }
}