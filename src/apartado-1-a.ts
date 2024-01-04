import {Pacientes, pacientes} from "./main"

export const obtenPacientesAsignadosAPediatria = pacientes.some(
    (pacientes : Pacientes) => pacientes.especialidad === "Pediatra"
);
