import { Pacientes } from "./main"


export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter(
        (pacientes : Pacientes) => pacientes.especialidad === "Pediatra"
    );
    };
