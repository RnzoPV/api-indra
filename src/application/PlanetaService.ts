import { Planeta } from "../domain/Planeta";
import { PlanetaExternalApiRepository } from "../domain/PlanetaExternalApiRepository";
import { PlanetaRepository } from "../domain/PlanetaRepository";

export class PlanetaService {
    constructor(private planetaRepository: PlanetaRepository, private apiRepository: PlanetaExternalApiRepository) { }
     obtenerPlaneta = async(id: string): Promise<Planeta>=>{
        const planeta = await this.planetaRepository.obtenerPlaneta(id);
        console.log("planeta", planeta);
        if (planeta) {
            return planeta;
        }
        const planetaApiStarWars = await this.apiRepository.obtenerPlaneta(id);
        console.log("planetaApiStarWars", planetaApiStarWars);
        return planetaApiStarWars;
    }
     crearPlaneta = async (planeta: Planeta): Promise<void> => {
        console.log("planeta", planeta);
        return await this.planetaRepository.crearPlaneta(planeta);
    }
}