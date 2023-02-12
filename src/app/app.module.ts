import { NgModule, Component, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AbueloComponent } from './clase5/abuelo/abuelo.component';
import { HijoUnoComponent } from './clase5/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase5/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase5/nieto-uno/nieto-uno.component';
import { FormulariosComponent } from './clase6/formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemplosMaterialComponent } from './clase7/ejemplos-material/ejemplos-material.component';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { MatButtonModule } from '@angular/material/button';
import { PipesComponent } from './clase8/pipes/pipes.component';
import { MiCustomPipe } from './clase8/pipes/mi-custom.pipe';
import { MiPropiaDirective } from './clase8/directivas/mi-propia.directive';
import { ServiciosComponent } from './clase9/servicios/servicios.component';
import { ListaAlumnosComponent } from './clase9/servicios/lista-alumnos/lista-alumnos.component';
import { ObservablesComponent } from './clas10/componentes/observables/observables.component';
import { MiVistaComponent } from './clase11/mi-vista/mi-vista.component';
import { EjemploContenidoUnoComponent } from './clase11/mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './clase11/mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { RouterModule } from '@angular/router';






const rutas: Routes; = [
    { path: 'uno', component: EjemploContenidoUnoComponent },
    { path: 'dos', Component: EjemploContenidoDosComponent },
    { path: 'mi-visita', component: MiVistaComponent },
     
]

export const APIRUL = new InjectionToken('APIRUL');

@NgModule({
  declarations: [
    AppComponent,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    FormulariosComponent,
    EjemplosMaterialComponent,
    PipesComponent,
    MiCustomPipe,
    AppInterpolacion,
    MiPrimerComponenteComponent,
    InterpolacionComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    MiPropiaDirective,
    ServiciosComponent,
    ListaAlumnosComponent,
    ObservablesComponent,
    MiVistaComponent,
    EjemploContenidoUnoComponent,
    EjemploContenidoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
