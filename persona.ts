export class Persona {
  //Atributos Globales
  private _nombres: string;
  private _apellidos: string;
  private _id: number;
  private _estadoCivil: string;

  //Métodos Accesores
  public getNombres(): string {
    return this._nombres;
  }
  public getApellidos(): string {
    return this._apellidos;
  }
  public getId(): number {
    return this._id;
  }
  public getEstadoCivil(): string {
    return this._estadoCivil;
  }

  //Métodos Modificadores
  public setNombres(valor: string) {
    this._nombres = valor;
  }
  public setApellidos(valor: string) {
    this._apellidos = valor;
  }
  public setId(valor: number) {
    this._id = valor;
  }
  public setEstadoCivil(valor: string){
    this._estadoCivil=valor;
  }
  

  //Método Constructor de la Clase
  constructor(
    //Parametros de la clase
    nombres: string,
    apellidos: string,
    id: number,
    estadoCivil: string
  ) {
    this._nombres = nombres;
    this._apellidos = apellidos;
    this._id = id;
    this._estadoCivil = estadoCivil;
  }

  //Método que muestra los datos asociados de la clase
  imprimirPersona() {
    console.log(
      "Nombres: " + this.getNombres(),
      "\nApellidos: " + this.getApellidos(),
      "\nID: " + this.getId(),
      "\nEstado Civil: " + this.getEstadoCivil()
    );
  }

  //Método para cambiar el Estado Civil
  CambiarEstadoCivil(estadoCivil: string) {
    this._estadoCivil = estadoCivil;
  }
}
