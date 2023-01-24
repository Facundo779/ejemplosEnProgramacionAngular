import { Component, OnInit, TemplateRef, QueryList, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-set-attrib-conset-datos',
  templateUrl: './set-attrib-conset-datos.component.html',
  styleUrls: ['./set-attrib-conset-datos.component.css']
})
export class SetAttribConsetDatosComponent implements OnInit, AfterViewInit{
  
  lugarDeTrabajoDos: any[];
  descripcionTareaDos: any[];
  tituloEmpleoDos: any[];
  idParrafoTemp: string[];
  arr: string[];
  nuevoName: string;
  nuevoNameB: string;
  nuevoId: string;
  iteranteDos: number;
  iteranteHTMLDos: number;
  nuevoNameprrfLT: string;
  nuevoNameprrfDT: string;
  nuevoNameprrfTE: string;
  restInputLTDos: string;
  restInputDTDos: string;
  restInputTEDos: string;
  datosGuardados: boolean;

  @ViewChild('nuevaSeccion') btnNewWork:any;
  @ViewChild('temBaseDos') newTemp!: TemplateRef<any>;
  @ViewChild('temBaseDos', {read:ViewContainerRef}) newContTemp!: ViewContainerRef;
  @ViewChildren('prrfLT') conjprrfLT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('prrfDT') conjprrfDT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('prrfTE') conjprrfTE!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChild('inputLTDos') entradaLTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('inputDTDos') entradaDTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('divTemp') divTemp!: QueryList<ElementRef<HTMLDivElement>>;

  nuevoTempYseteoAtribDos():void{
    this.newContTemp.createEmbeddedView(this.newTemp);
    this.iteranteDos = this.iteranteDos + 1; 
    this.iteranteHTMLDos = this.iteranteHTMLDos + 1; 
    this.nuevoId = "divTemp" + this.iteranteDos;
    this.nuevoName = "divTemp" + this.iteranteDos; 
    this.nuevoNameB = "divTemp" + this.iteranteDos; 
    this.nuevoNameprrfLT = "varLT" + this.iteranteDos; 
    this.nuevoNameprrfDT = "varDT" + this.iteranteDos; 
    this.nuevoNameprrfTE = "varTE" + this.iteranteDos; 
    setTimeout(()=>{
      this.divTemp.last.nativeElement.setAttribute('id',`${this.nuevoId}`);
      this.divTemp.last.nativeElement.setAttribute('name',`${this.nuevoName}`);
      this.divTemp.last.nativeElement.setAttribute('nameb',`${this.nuevoNameB}`);
      this.conjprrfLT.last.nativeElement.setAttribute('namelt',`${this.nuevoNameprrfLT}`);
      this.conjprrfDT.last.nativeElement.setAttribute('namedt',`${this.nuevoNameprrfDT}`);
      this.conjprrfTE.last.nativeElement.setAttribute('namete',`${this.nuevoNameprrfTE}`);
      
      this.conjprrfLT.last.nativeElement.textContent = this.lugarDeTrabajoDos[-1 + this.iteranteDos];
      this.conjprrfDT.last.nativeElement.textContent = this.descripcionTareaDos[-1 + this.iteranteDos];
      this.conjprrfTE.last.nativeElement.textContent = this.tituloEmpleoDos[-1 + this.iteranteDos];

    }, 100);
  }

  guardarDatosDos(varTEDos:any, varLTDos:any, varDTDos:any):void{
    //console.log('click');
    if(varLTDos&&varDTDos!==""){
      this.nuevoTempYseteoAtribDos();
      this.lugarDeTrabajoDos.push(varLTDos); 
      this.descripcionTareaDos.push(varDTDos); 
      this.tituloEmpleoDos.push(varTEDos); 
      this.restInputLTDos = ""; 
      this.restInputDTDos = "";
      this.restInputTEDos = "";
      this.datosGuardados = true;
      
    }else{
      this.datosGuardados = false;
    }
    //this.descripcionTarea.push(this.entradaDT); 
  }

  constructor() {
    this.lugarDeTrabajoDos = [];
    this.descripcionTareaDos = [];
    this.tituloEmpleoDos = [];
    this.idParrafoTemp = [];
    this.arr = [];
    this.nuevoId="";
    this.nuevoName="";
    this.nuevoNameB="";
    this.iteranteDos = 0;
    this.iteranteHTMLDos = -1;
    this.nuevoNameprrfLT ="";
    this.nuevoNameprrfDT ="";
    this.nuevoNameprrfTE ="";
    this.restInputLTDos ="";
    this.restInputDTDos ="";
    this.restInputTEDos ="";
    this.datosGuardados = false;
   }

  ngOnInit(): void {
  }
  
  ngAfterViewInit():void{

  }
}
