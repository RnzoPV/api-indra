import { Planeta } from "../domain/Planeta";
import { DynamoDB } from 'aws-sdk';
import { PlanetaRepository } from "../domain/PlanetaRepository";

export class DynamoPlanetaRepository implements PlanetaRepository {
    constructor(private dynamoClient: DynamoDB.DocumentClient) { }
    async obtenerPlaneta(id: string): Promise<Planeta> {
        const params = {
            TableName: process.env.PLANET_TABLE!,
            Key: {
                id_planeta: id
            }
        };
        const data = await this.dynamoClient.get(params).promise();
        return data.Item as Planeta;
    }

    async crearPlaneta(planeta: Planeta): Promise<void> {

        const params = {
            TableName:  process.env.PLANET_TABLE!,
            Item: this.mapToDB(planeta)
        };
        console.log("params", params);
        await this.dynamoClient.put(params).promise();
    }
    mapToDB(planeta: Planeta): any {
        return {
            id_planeta: planeta.id,
            url: planeta.url,
            nombre: planeta.nombre,
            terreno: planeta.terreno,
            clima: planeta.clima,
            poblacion: planeta.poblacion,
            diametro: planeta.diametro,
            periodo_rotacion: planeta.periodoRotacion,
            periodo_orbita: planeta.periodoOrbita
        };
    }
}