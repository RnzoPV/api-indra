import { Planeta } from "../domain/Planeta";

export class DynamoPlanetaRepository {
    constructor(private dynamoClient: DynamoDB.DocumentClient) { }
    async obtenerPlaneta(id: string): Promise<Planeta> {
        const params = {
            TableName: 'Planetas',
            Key: {
                'id': id
            }
        };
        const data = await this.dynamoClient.get(params).promise();
        return data.Item as Planeta;
    }
    async crearPlaneta(planeta: Planeta): Promise<void> {
        const params = {
            TableName: 'Planetas',
            Item: planeta
        };
        await this.dynamoClient.put(params).promise();
    }
}