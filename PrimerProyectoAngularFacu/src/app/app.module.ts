import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './elemento/header/header.component';
import { SectionComponent } from './elemento/section/section.component';
import { FooterComponent } from './elemento/footer/footer.component';
import { AcercaDEComponent } from './elemento/section/subElementos/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './elemento/section/subElementos/experiencia/experiencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    AcercaDEComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
