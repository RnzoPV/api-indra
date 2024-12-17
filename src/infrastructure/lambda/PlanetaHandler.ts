import { Planeta } from "../../domain/Planeta";
import { ServiceContainer } from "../../shared/infraestructure/ServiceContainer";
import {APIGatewayProxyEvent,APIGatewayProxyResult}from "aws-lambda";



export const obtenerPlaneta = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    try {
        const body = JSON.parse(event.body||'{}');
        const id = body.id;
        const planeta: Planeta = await ServiceContainer.Planeta.obtenerPlaneta(id);
        return {
            statusCode: 200,
            body: JSON.stringify(planeta),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
}
export const crearPlaneta =  async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> =>  {
    try {
        const body = JSON.parse(event.body||'{}');
        const planeta: Planeta = new Planeta(body.id, body.url, body.nombre, body.terreno, body.clima, body.poblacion, body.diametro, body.periodoRotacion, body.periodoOrbita);
        await ServiceContainer.Planeta.crearPlaneta(planeta);
        return {
            statusCode: 200,
            body: JSON.stringify(planeta),
        };       
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
        
    }
}