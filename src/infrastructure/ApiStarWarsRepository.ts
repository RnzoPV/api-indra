import axios from 'axios';
import { Planeta } from '../domain/Planeta';
import { PlanetaExternalApiRepository } from '../domain/PlanetaExternalApiRepository';

export class ApiStarWarsRepository implements PlanetaExternalApiRepository{

    private baseUrl : string;
    constructor() {
        this.baseUrl  = `https://swapi.py4e.com/api/planets/`;
     }
    async obtenerPlaneta(id: string): Promise<Planeta> {
        try {
            const response = await axios.get(`${this.baseUrl}${id}`);
            return this.mapToDomain(response.data);
        } catch (error) {
            throw new Error(error);
        }
    }
    mapToDomain(planeta: any): Planeta {
        return new Planeta(
            '',
            planeta.url,
            planeta.name,
            planeta.terrain,
            planeta.climate,
            planeta.population,
            planeta.diameter,
            planeta.rotation_period,
            planeta.orbital_period
        );
    }
}