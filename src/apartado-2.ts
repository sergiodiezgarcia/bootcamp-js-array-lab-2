import { Pacientes } from "./main";

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProcotolo = false;
  
    if (pacientes.some(patient => patient.temperatura > 39)) {
        activarProcotolo = true;
      }
  
    return activarProcotolo;
  };