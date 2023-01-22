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

  guardarDatos(event:Event):void{
    //console.log('click');
    this.lugarDeTrabajo.push((<HTMLInputElement>event.target).value); 
    //this.descripcionTarea.push(this.entradaDT); 
    console.log(this.lugarDeTrabajo);
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
