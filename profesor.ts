import { Empleado } from "./empleado";

export class Profesor extends Empleado {
  private _departamento: string;

  //Método Accesor
  public getDepartamento(): string {
    return this._departamento;
  }
  //Método Modificador
  public setDepartamento(valor: string) {
    this._departamento = valor;
  }

  constructor(
    //Parametros del constructor de la clase superior persona
    nombres: string,
    apellidos: string,
    id: number,
    estadoCivil: string,
    //Parametros del constructor de la clase superior empleado
    añoDeIncorporacion: number,
    numeroDespacho: number,
    //Parametros del constructor de la clase derivada profesor
    departamento: string
  ) {
    //Parámetros Heredados
    super(
      nombres,
      apellidos,
      id,
      estadoCivil,
      añoDeIncorporacion,
      numeroDespacho
    );
    //Parámetro Propio
    this._departamento = departamento;
  }

  cambiarDepartamento(departamento:string){
    this._departamento=departamento;
  }

  /**************/
  /*Método hereado => imprimirPersona() que fue modificado
  su nombre para asociarla a la clase*/
  imprimirProfesor() {
    console.log("\n********Datos del Profesor********");
    super.imprimirEmpleado();
    console.log("Departamento: " + this.getDepartamento());
  }
}
