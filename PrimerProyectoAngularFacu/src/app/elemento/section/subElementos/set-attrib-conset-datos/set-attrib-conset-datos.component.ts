import { Component, OnInit, TemplateRef, QueryList, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-set-attrib-conset-datos',
  templateUrl: './set-attrib-conset-datos.component.html',
  styleUrls: ['./set-attrib-conset-datos.component.css']
})
export class SetAttribConsetDatosComponent implements OnInit, AfterViewInit{
  
  lugarDeTrabajoDos: any[];
  descripcionTareaDos: any[];
  nameLiTemp: string[];
  namebLiTemp: string[];
  idParrafoTemp: string[];
  arr: string[];
  nuevoName: string;
  nuevoNameB: string;
  nuevoId: string;
  iterante: number;
  nuevoNameprrfLT: string;
  nuevoNameprrfDT: string;
  restInputLTDos: string;
  restInputDTDos: string;

  @ViewChild('nuevaSeccion') btnNewWork:any;
  @ViewChild('temBaseDos') newTemp!: TemplateRef<any>;
  @ViewChild('temBaseDos', {read:ViewContainerRef}) newContTemp!: ViewContainerRef;
  @ViewChildren('prrfLT') conjprrfLT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('prrfDT') conjprrfDT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChild('inputLTDos') entradaLTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('inputDTDos') entradaDTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('divTemp') divTemp!: QueryList<ElementRef<HTMLDivElement>>;

  nuevoTempYseteoAtribDos():void{
    this.newContTemp.createEmbeddedView(this.newTemp);
    this.iterante = this.iterante + 1; 
    this.nuevoId = "divTemp" + this.iterante;
    this.nuevoName = "divTemp" + this.iterante; 
    this.nuevoNameB = "divTemp" + this.iterante; 
    this.nuevoNameprrfLT = "varLT" + this.iterante; 
    this.nuevoNameprrfDT = "varDT" + this.iterante; 
    setTimeout(()=>{
      this.divTemp.last.nativeElement.setAttribute('id',`${this.nuevoId}`);
      this.divTemp.last.nativeElement.setAttribute('name',`${this.nuevoName}`);
      this.divTemp.last.nativeElement.setAttribute('nameb',`${this.nuevoNameB}`);
      this.conjprrfLT.last.nativeElement.setAttribute('namelt',`${this.nuevoNameprrfLT}`);
      this.conjprrfDT.last.nativeElement.setAttribute('namedt',`${this.nuevoNameprrfDT}`);
    }, 100);
  }

  guardarDatosDos(varLTDos:any, varDTDos:any):void{
    //console.log('click');
    if(varLTDos&&varDTDos!==""){
      this.nuevoTempYseteoAtribDos();
      this.lugarDeTrabajoDos.push(varLTDos); 
      this.descripcionTareaDos.push(varDTDos); 
      this.restInputLTDos = ""; 
      this.restInputDTDos = "";
    }else{
      
    }
    //this.descripcionTarea.push(this.entradaDT); 
    console.log(this.lugarDeTrabajoDos);
    console.log(this.descripcionTareaDos);
  }

  constructor() {
    this.lugarDeTrabajoDos = [];
    this.descripcionTareaDos = [];
    this.nameLiTemp = [];
    this.namebLiTemp = [];
    this.idParrafoTemp = [];
    this.arr = [];
    this.nuevoId="";
    this.nuevoName="";
    this.nuevoNameB="";
    this.iterante = 0;
    this.nuevoNameprrfLT ="";
    this.nuevoNameprrfDT ="";
    this.restInputLTDos ="";
    this.restInputDTDos ="";
   }

  ngOnInit(): void {
  }
  
  ngAfterViewInit():void{

  }
}
