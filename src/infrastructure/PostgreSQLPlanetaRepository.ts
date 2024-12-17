import {Pool} from 'pg';
import {Planeta} from '../domain/Planeta';
import { PlanetaRepository } from '../domain/PlanetaRepository';
export class PostgreSQLPlanetaRepository implements PlanetaRepository {
    private pool: Pool;
    constructor() {
        this.pool = new Pool({ connectionString: process.env.DATABASE_URL });
    }

    async obtenerPlaneta(id: string): Promise<Planeta> {
        const client = await this.pool.connect();
        const { rows } = await client.query('SELECT * FROM planetas WHERE id = $1', [id]);
        client.release();
        return rows.map((row: any) => new Planeta(row.id_planeta,row.url,row.nombre,row.terreno,row.clima,row.poblacion,row.diametro,row.periodoRotacion,row.periodoOrbita))[0];
    }

    async crearPlaneta(planeta: Planeta): Promise<void> {
        const client = await this.pool.connect();
        await client.query('INSERT INTO PlanetTable (id_planeta,url,nombre,terreno,clima,poblacion,diametro,periodo_rotacion,periodo_orbita) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
             [planeta.id,planeta.url, planeta.nombre,planeta.terreno, planeta.clima,planeta.poblacion,planeta.diametro,planeta.periodoRotacion,planeta.periodoOrbita]);
        client.release();
    }
}