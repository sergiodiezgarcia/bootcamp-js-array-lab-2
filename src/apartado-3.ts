import { Pacientes } from "./main";

export const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.map(pacientes => ({
        ...pacientes,
        especialidad:"Medico de familia" ,
    }));
    };