import { Planeta } from "../domain/Planeta";
import { PlanetaExternalApiRepository } from "../domain/PlanetaExternalApiRepository";
import { PlanetaRepository } from "../domain/PlanetaRepository";

export class PlanetaService {
    constructor(private planetaRepository: PlanetaRepository, private apiRepository: PlanetaExternalApiRepository) { }
    async obtenerPlaneta(id: string): Promise<Planeta> {
        const planeta = this.planetaRepository.obtenerPlaneta(id);
        if (planeta) {
            return planeta;
        }
        const planetaApiStarWars = this.apiRepository.obtenerPlaneta(id);
        return planetaApiStarWars;
    }
    async crearPlaneta(planeta: Planeta): Promise<void> {
        return this.planetaRepository.crearPlaneta(planeta);
    }
}