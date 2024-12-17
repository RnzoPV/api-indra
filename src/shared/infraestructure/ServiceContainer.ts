import { PlanetaService } from "../../application/PlanetaService";
import { ApiStarWarsRepository } from "../../infrastructure/ApiStarWarsRepository";
import { DynamoPlanetaRepository } from "../../infrastructure/DynamoPlanetaRepository";
import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();
const planetaRepository = new DynamoPlanetaRepository(docClient);
const apiStarWarRepository = new ApiStarWarsRepository();
const service = new PlanetaService(planetaRepository, apiStarWarRepository);
export const ServiceContainer = {
    Planeta:{
        obtenerPlaneta : service.obtenerPlaneta,
        crearPlaneta : service.crearPlaneta 
    }
};