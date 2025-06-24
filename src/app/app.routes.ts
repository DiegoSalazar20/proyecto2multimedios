import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { ComousarComponent } from './comousar/comousar.component';
import { ContactoComponent } from './contacto/contacto.component';
import {EmprendimientoDetalleComponent} from './emprendimiento-detalle/emprendimiento-detalle.component';


export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent },
    {path: 'comousar', component: ComousarComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'emprendimientos', component: EmprendimientosComponent},
    {path: 'contactos', component: ContactoComponent},
    {path: 'emprendimiento/:id', component: EmprendimientoDetalleComponent}
];
