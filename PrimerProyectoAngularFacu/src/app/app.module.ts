import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './elemento/header/header.component';
import { SectionComponent } from './elemento/section/section.component';
import { FooterComponent } from './elemento/footer/footer.component';
import { AcercaDEComponent } from './elemento/section/subElementos/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './elemento/section/subElementos/experiencia/experiencia.component';
import { FormsModule } from '@angular/forms';
import { SetAttribTempComponent } from './elemento/section/subElementos/set-attrib-temp/set-attrib-temp.component';
import { SetAttribConsetDatosComponent } from './elemento/section/subElementos/set-attrib-conset-datos/set-attrib-conset-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    AcercaDEComponent,
    ExperienciaComponent,
    SetAttribTempComponent,
    SetAttribConsetDatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
