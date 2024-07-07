import { Preparacion } from '../models/preparacion';

let preparaciones: Preparacion[] = [];
let currentId = 1;

export const getPreparaciones = (): Preparacion[] => preparaciones;

export const getPreparacionById = (idpreparacion: number): Preparacion | undefined => 
  preparaciones.find(p => p.idpreparacion === idpreparacion);

export const createPreparacion = (data: Omit<Preparacion, 'idpreparacion'>): Preparacion => {
  const newPreparacion = { ...data, idpreparacion: currentId++ };
  preparaciones.push(newPreparacion);
  return newPreparacion;
};

export const updatePreparacion = (idpreparacion: number, data: Omit<Preparacion, 'idpreparacion'>): Preparacion | undefined => {
  const index = preparaciones.findIndex(p => p.idpreparacion === idpreparacion);
  if (index !== -1) {
    preparaciones[index] = { ...data, idpreparacion };
    return preparaciones[index];
  }
  return undefined;
};

export const deletePreparacion = (idpreparacion: number): boolean => {
  const index = preparaciones.findIndex(p => p.idpreparacion === idpreparacion);
  if (index !== -1) {
    preparaciones.splice(index, 1);
    return true;
  }
  return false;
};
