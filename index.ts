import { Profesor } from "./profesor";
import { PersonalDeServicio } from "./personal_de_servicio";
import { Estudiante } from "./estudiante";
import * as readline from "readline";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "+----------|REGISTROS DE PERSONAS|----------+" +
    "\n| Elija una opción:                         |" +
    "\n| 1 = Estudiante                            |" +
    "\n| 2 = Profesor                              |" +
    "\n| 3 = Personal de Servicio                  |" +
    "\n+-------------------------------------------+" +
    "\nRespuesta: ",
  (resultado) => {
    //Evaluamos el dato obtenido en un condicional switch
    switch (resultado) {
      case "1": //Si esta es la respuesta, entonces se crea una instancia de la clase Estudiante
        const estudiante_TS4 = new Estudiante(
          "Alisson Milenca", //Nombres
          "Ponce Quinde", //Apellidos
          1562777728, //ID
          "Soltera", //Estado Civil
          "2B" // Curso
        );
        console.log("\nSe creo el siguiente registro de un estudiante");
        estudiante_TS4.imprimirEstudiante();

        rl.question(
          "\n¿Qué cambios desea realizar para el estudiante?" +
            "\n1 = Matricular al estudiante en un nuevo curso" +
            "\n2 = Cambiar su estado civil" +
            "\nRespuesta: ",
          (respuesta) => {
            switch (respuesta) {
              case "1":
                rl.question(
                  "Escriba el curso al que se matriculara al estudiante: ",
                  (respuesta) => {
                    estudiante_TS4.matricularNuevoCurso(respuesta);
                    console.log("\nDato Modificado: CURSO");
                    estudiante_TS4.imprimirEstudiante();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              case "2":
                rl.question(
                  "Escriba el nuevo estado civil del estudiante: ",
                  (respuesta) => {
                    estudiante_TS4.CambiarEstadoCivil(respuesta);
                    console.log("\nDato Modificado: ESTADO CIVIL");
                    estudiante_TS4.imprimirEstudiante();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              default:
                console.log("¡¡Dato no valido!!");
                break;
            }
          }
        );
        break;

      case "2": //Si esta es la respuesta, entonces se crea una instancia de la clase Profesor
        const profesor_I34 = new Profesor(
          "Neicer Ibrahin", //Nombres
          "Vásquez Bermúdez", //Apellidos
          1314628171, //ID
          "Soltero", //Estado Civil
          2022, //Año de incorporación
          204, //Número de Despacho
          "Informática" //Departamento
        );
        console.log("\nSe creo el siguiente registro de un profesor");
        profesor_I34.imprimirProfesor();

        //Preguntas de control
        rl.question(
          "\n¿Qué cambios desea realizar para el profesor?" +
            "\n1 = Cambiar el departamento asignado" +
            "\n2 = Cambiar el número de despacho" +
            "\n3 = Cambiar su estado civil" +
            "\nRespuesta: ",
          (respuesta) => {
            switch (respuesta) {
              case "1":
                rl.question(
                  "Escriba el nuevo departamento al que se va asignar al profesor: ",
                  (respuesta) => {
                    profesor_I34.cambiarDepartamento(respuesta);
                    console.log("\nDato Modificado: DEPARTAMENTO");
                    profesor_I34.imprimirProfesor();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              case "2":
                //Proceso para cambiar el número de despacho del profesor como empleado
                rl.question(
                  "Escriba el número de despacho al que se va asignar al profesor: ",
                  (respuesta) => {
                    profesor_I34.reasignarDespacho(parseInt(respuesta));
                    console.log("\nDato Modificado: NÚMERO DE DEPARTAMENTO");
                    profesor_I34.imprimirProfesor();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              case "3":
                //Proceso para cambiar el estado civil del profesor
                rl.question(
                  "Escriba el nuevo estado civil del profesor: ",
                  (respuesta) => {
                    profesor_I34.CambiarEstadoCivil(respuesta);
                    console.log("\nDato Modificado: ESTADO CIVIL");
                    profesor_I34.imprimirProfesor();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              default:
                console.log("¡¡Dato no valido!!");
                break;
            }
          }
        );
        break;

      case "3": //Si esta es la respuesta, entonces se crea una instancia de la clase Personal de Servicio
        const personalDS_IN2 = new PersonalDeServicio(
          "Alex Vicente",
          "Wilson Chavez",
          2133345678,
          "Unido",
          2022,
          67,
          "Seguridad"
        );
        console.log(
          "\nSe creo el siguiente registro de un personal de servicio"
        );
        personalDS_IN2.imprimirPersonalDeServicio();

        //Preguntas de control
        rl.question(
          "\n¿Qué cambios desea realizar para el personal de servicio?" +
            "\n1 = Cambiar la sección asignada" +
            "\n2 = Cambiar el número de despacho" +
            "\n3 = Cambiar su estado civil" +
            "\nRespuesta: ",
          (respuesta) => {
            switch (respuesta) {
              case "1":
                //Proceso para cambiar a una nueva sección asignada al personal de servicio
                rl.question(
                  "Escriba la nueva sección al que se va asignar al personal de servicio: ",
                  (respuesta) => {
                    personalDS_IN2.cambiarSeccion(respuesta);
                    console.log("\nDato Modificado: SECCIÓN");
                    personalDS_IN2.imprimirPersonalDeServicio();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              case "2":
                //Proceso para cambiar el número de despacho del personal de servicio como empleado
                rl.question(
                  "Escriba el número de despacho al que se va asignar al profesor: ",
                  (respuesta) => {
                    personalDS_IN2.reasignarDespacho(parseInt(respuesta));
                    console.log("\nDato Modificado: NÚMERO DE DEPARTAMENTO");
                    personalDS_IN2.imprimirPersonalDeServicio();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              case "3":
                //Proceso para cambiar el estado civil del personal de servicio
                rl.question(
                  "Escriba el nuevo estado civil del personal de servicio: ",
                  (respuesta) => {
                    personalDS_IN2.CambiarEstadoCivil(respuesta);
                    console.log("\nDato Modificado: ESTADO CIVIL");
                    personalDS_IN2.imprimirPersonalDeServicio();
                    console.log("\nPara salir presione [ctrl]+[c]");
                  }
                );
                break;
              default:
                console.log("¡¡Dato no valido!!");
                break;
            }
          }
        );

        break;
      default: //En caso de que no sean ninguna la respuesta estaria mal
        console.log("¡¡Dato no valido!!");
        break;
    }
  }
);

rl.on("line", (input) => {
  console.log("Para salir presione [ctrl]+[c]");
});