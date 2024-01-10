import { Pacientes } from "./main";

export const obtenPacientesAsignadosAPediatriaYMenorDiez = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (pacientes: Pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
  );
};
