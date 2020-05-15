import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { RedesComponent } from './redes/redes.component';
import { TituloComponent } from './titulo/titulo.component';

import { RouterModule, Routes } from '@angular/router';

const rutas:Routes = [

  {
    path: 'contacto',
    component:ContactoComponent
  },
  {
    path: 'nosotros',
    component:NosotrosComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    RedesComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
