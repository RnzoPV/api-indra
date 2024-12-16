import { Planeta } from "../domain/Planeta";
import { PlanetaRepository } from "../domain/PlanetaRepository";

export class InMemoryPlanetaRepository implements PlanetaRepository {
    private planetas: Planeta[]  = [];

    async obtenerPlaneta(id: string): Promise<Planeta> {
        return this.planetas.find(planeta => planeta.id === id)|| new Planeta();
    }

    async crearPlaneta(planeta: Planeta): Promise<void> {
        this.planetas.push(planeta);    
    }
}