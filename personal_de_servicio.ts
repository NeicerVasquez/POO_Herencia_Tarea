import { Empleado } from "./empleado";

export class PersonalDeServicio extends Empleado {
  private _seccion: string;

  //Método Accesor
  public getSeccion(): string {
    return this._seccion;
  }
  //Método Modificador
  public setSeccion(valor: string) {
    this._seccion = valor;
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
    //Parametros del constructor de la clase derivada personal_de_servicio
    seccion: string
  ) {
    super(
      nombres,
      apellidos,
      id,
      estadoCivil,
      añoDeIncorporacion,
      numeroDespacho
    );
    this._seccion = seccion;
  }

  //Método Correspondiente a la clase asociada
  cambiarSeccion(seccion: string) {
    this._seccion = seccion;
  }

  /*Este es el mismo método imprimirPersona() que fue
  heredado de la clase persona => empleado => personal de servicio*/
  imprimirPersonalDeServicio() {
    console.log("\n********Datos del Personal de Servicio********");
    super.imprimirEmpleado();
    console.log("Sección: " + this.getSeccion());
  }
}
