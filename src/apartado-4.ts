import { Pacientes } from "./main";

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean =>
  pacientes.some((pacientes) => pacientes.especialidad === "Pediatra");
