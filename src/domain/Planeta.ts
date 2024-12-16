export class Planeta {

    constructor(
        private _id: string = '',
        private _url: string = '',
        private _nombre: string = '',
        private _terreno: string = '',
        private _clima: string = '',
        private _poblacion: string = '',
        private _diametro: string = '',
        private _periodo_rotacion: string = '',
        private _periodo_orbita: string = ''
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
    set periodo_rotacion(periodo_rotacion: string) {
        this._periodo_rotacion = periodo_rotacion;
    }
    get periodo_rotacion(): string {
        return this._periodo_rotacion;
    }
    set periodo_orbita(periodo_orbita: string) {
        this._periodo_orbita = periodo_orbita;
    }
    get periodo_orbita(): string {
        return this._periodo_orbita;
    }
    set id(id: string) {
        this._id = id;
    }
    get id(): string {
        return this._id;
    }
}