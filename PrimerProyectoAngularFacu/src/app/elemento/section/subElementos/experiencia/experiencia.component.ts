import { AfterViewInit, Component, OnInit, TemplateRef, QueryList, ElementRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, AfterViewInit {

  lugarDeTrabajo: any[];
  descripcionTarea: any[];
  
   

  constructor() { 
    this.lugarDeTrabajo = ["LugDeTrabUno", "LugDeTrabDos", "LugDeTrabTres"];
    this.descripcionTarea = ["TareaRealizUno", "TareaRealizDos", "TareaRealizTres"];
    
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}
