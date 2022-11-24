export interface ICargo {
  id: number;
  nombre: string;
}

export interface IEmpleado {
  cedula: string;
  nombres: string;
  fechaNacimiento: Date;
  sueldo: number;
  cargos: ICargo[];
}

export interface IMenu {
  icon: string;
  nombre: string;
  pagina: string;
  perfil: number;
}