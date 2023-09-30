import { Persona } from "./persona";

export class Empleado extends Persona {
  //Atributos Globales
  private _añoDeIncorporacion: number;
  private _numeroDespacho: number;

  //Método Constructor de la clase
  constructor(
    //Parametros del constructor de la clase superior (persona)
    nombres: string,
    apellidos: string,
    id: number,
    estadoCivil: string,
    //Parametros del constructor de la clase propia (empleado)
    añoDeIncorporacion: number,
    numeroDespacho: number
  ) {
    //Parámetros Heredados
    super(nombres, apellidos, id, estadoCivil);
    //Parámetros Propios
    this._añoDeIncorporacion = añoDeIncorporacion;
    this._numeroDespacho = numeroDespacho;
  }

  //Métodos Accesores
  public getNumeroDespacho(): number {
    return this._numeroDespacho;
  }
  public getAñoDeIncorporacion(): number {
    return this._añoDeIncorporacion;
  }

  //Métodos Modificadores
  public setAñoDeIncorporacion(valor: number) {
    this._añoDeIncorporacion = valor;
  }
  public setNumeroDespacho(valor: number) {
    this._numeroDespacho = valor;
  }
  /**************/
  //Método hereado => imprimirPersona()
  imprimirEmpleado() {
    //Imprimir los datos de la clase superior Persona
    super.imprimirPersona();
    console.log(
      //Imprimir los datos de la clase heredado Empleado
      "Año de Incorporación: " + this.getAñoDeIncorporacion(),
      "\nNúmero de Despacho: " + this.getNumeroDespacho()
    );
  }

    //Método de Reasignación
    reasignarDespacho(numeroDespacho: number) {
      this._numeroDespacho = numeroDespacho;
    }
}
