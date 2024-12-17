export class Planeta {

    constructor(
        private _id: string = '',
        private _url: string = '',
        private _nombre: string = '',
        private _terreno: string = '',
        private _clima: string = '',
        private _poblacion: string = '',
        private _diametro: string = '',
        private _periodoRotacion: string = '',
        private _periodoOrbita: string = ''
    ) { }
    set url(url: string) {
        this._url = url;
    }
    get url(): string {
        return this._url;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }
    set terreno(terreno: string) {
        this._terreno = terreno;
    }
    get terreno(): string {
        return this._terreno;
    }
    set clima(clima: string) {
        this._clima = clima;
    }
    get clima(): string {
        return this._clima;
    }
    set poblacion(poblacion: string) {
        this._poblacion = poblacion;
    }
    get poblacion(): string {
        return this._poblacion;
    }
    set diametro(diametro: string) {
        this._diametro = diametro;
    }
    get diametro(): string {
        return this._diametro;
    }
    set periodoRotacion(periodoRotacion: string) {
        this._periodoRotacion = periodoRotacion;
    }
    get periodoRotacion(): string {
        return this._periodoRotacion;
    }
    set periodoOrbita(periodoOrbita: string) {
        this._periodoOrbita = periodoOrbita;
    }
    get periodoOrbita(): string {
        return this._periodoOrbita;
    }

    set id(id: string) {
        this._id = id;
    }
    get id(): string {
        return this._id;
    }
}