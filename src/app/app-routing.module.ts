import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';


const routes: Routes = [
  { path: '', redirectTo: 'listar-productos', pathMatch: 'full' }, // Redirecciona a "ListarProductosComponent"
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: '**', redirectTo: 'listar-productos', pathMatch: 'full' } // Redirecciona a "ListarProductosComponent" en caso de ruta inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
