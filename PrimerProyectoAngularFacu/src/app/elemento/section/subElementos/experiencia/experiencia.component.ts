import { AfterViewInit, Component, OnInit, TemplateRef, QueryList, ElementRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, AfterViewInit {

  lugarDeTrabajo: any[];
  descripcionTarea: any[];
 
  @ViewChildren('liLT') conjLiLT!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChildren('liDT') conjLiDT!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChild('inputLT') entradaLT!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('inputDT') entradaDT!: QueryList<ElementRef<HTMLInputElement>>;

  guardarDatos(varLT:any, varDT:any):void{
    //console.log('click');
    this.lugarDeTrabajo.push(varLT); 
    this.descripcionTarea.push(varDT); 
    //this.descripcionTarea.push(this.entradaDT); 
    console.log(this.lugarDeTrabajo);
    console.log(this.descripcionTarea);
  }


  constructor() { 
    this.lugarDeTrabajo = [];
    this.descripcionTarea = [];
    
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}
