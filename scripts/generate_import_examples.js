const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
const empleadosData = [
  ['Legajo','Nombre','Apellido','DNI','CUIL','Fecha Ingreso','Estado','Departamento','Cargo','Categoría Laboral','Convenio','Tipo Jornada'],
  ['EMP001','Ana','López','32123456','27-32123456-9','01/03/2024','activo','Producción','Operario','Operario','UOCRA','completa'],
  ['EMP002','Juan','Pérez','29876543','20-29876543-1','15/04/2024','activo','Administración','Analista','Profesional','Empleados de Comercio','completa'],
  ['EMP003','María','García','30456789','27-30456789-0','02/02/2024','activo','Logística','Coordinador','Supervisor','Metalúrgicos (UOM)','completa'],
];
const fichadasData = [
  ['Empleado ID','Tipo','Fecha','Hora','Método','Ubicación','Observaciones'],
  ['EMP001','entrada','01/05/2024','08:00','manual','Oficina','Inicio jornada'],
  ['EMP001','salida','01/05/2024','16:00','manual','Oficina','Fin jornada'],
  ['EMP002','entrada','01/05/2024','09:00','manual','Oficina','Inicio jornada'],
  ['EMP002','salida','01/05/2024','18:00','manual','Oficina','Fin jornada'],
  ['EMP003','entrada','01/05/2024','07:30','manual','Planta','Inicio jornada'],
  ['EMP003','salida','01/05/2024','15:30','manual','Planta','Fin jornada'],
];
const wbEmp = XLSX.utils.book_new();
const wsEmp = XLSX.utils.aoa_to_sheet(empleadosData);
XLSX.utils.book_append_sheet(wbEmp, wsEmp, 'Empleados');
XLSX.writeFile(wbEmp, path.join(publicDir, 'ejemplo_importar_empleados.xlsx'));
const wbFich = XLSX.utils.book_new();
const wsFich = XLSX.utils.aoa_to_sheet(fichadasData);
XLSX.utils.book_append_sheet(wbFich, wsFich, 'Fichadas');
XLSX.writeFile(wbFich, path.join(publicDir, 'ejemplo_importar_fichadas.xlsx'));
console.log('Created example files in public: ejemplo_importar_empleados.xlsx, ejemplo_importar_fichadas.xlsx');
