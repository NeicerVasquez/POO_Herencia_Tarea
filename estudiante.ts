import { Persona } from "./persona";

export class Estudiante extends Persona {
  private _curso: string;

  //Método Accesor
  public getCurso(): string {
    return this._curso;
  }

  //Método Modificador
  public setCurso(valor: string) {
    this._curso = valor;
  }

  //Constructor de la clase Estudiante
  constructor(
    //Parámetros de la clase padre Persona
    nombres: string,
    apellidos: string,
    id: number,
    estadoCivil: string,
    //Parámetro de la clase hija Estudiante
    curso: string
  ) {
    super(nombres, apellidos, id, estadoCivil);
    this._curso = curso;
  }

  //Método que pide un parametro y lo guarda en un arreglo estático
  matricularNuevoCurso(curso: string) {
    let arrCurso: string[] = [this.getCurso()];

    for (let i: number = 1; i < 2; i++) {
      this.setCurso(curso);
      arrCurso[i] = this.getCurso();
    }
  }

  /*********/
  /*Método heredado de la clase Persona y modificado su nombre
  para la clase Estudiante*/
  imprimirEstudiante() {
    console.log("\n********Datos del Estudiante********");
    super.imprimirPersona();
    console.log("Curso: " + this.getCurso());
  }
}
