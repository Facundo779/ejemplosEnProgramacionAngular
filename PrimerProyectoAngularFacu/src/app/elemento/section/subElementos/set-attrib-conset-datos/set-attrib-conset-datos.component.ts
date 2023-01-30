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
  visibCB: boolean;
  nuevoNameCBES:string;
  arrCBparaTempEliminar: any[];
  arrCBparaTempResetear: any[];
  arrTempResetear: any[];

  @ViewChild('nuevaSeccion') btnNewWork:any;
  @ViewChild('temBaseDos') newTemp!: TemplateRef<any>;
  @ViewChild('temBaseDos', {read:ViewContainerRef}) newContTemp!: ViewContainerRef;
  @ViewChildren('prrfLT') conjprrfLT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('prrfDT') conjprrfDT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('prrfTE') conjprrfTE!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChild('inputLTDos') entradaLTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('inputDTDos') entradaDTDos!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('divTemp') divTemp!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('modalLabDos') modLabDos!: QueryList<ElementRef<HTMLDialogElement>>;
  @ViewChild('btnModLabCloseDos') btnModLabCloseDos!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren('cbES') cbElimSecc!:QueryList<ElementRef<HTMLInputElement>>;

  nuevoTempYseteoAtribDos():void{
    this.newContTemp.createEmbeddedView(this.newTemp);
    this.iteranteDos = this.iteranteDos + 1; 
    this.iteranteHTMLDos = this.iteranteHTMLDos + 1; 
    this.nuevoId = "divTemp" + this.iteranteDos;
    this.nuevoName = "divTemp" + this.iteranteDos; 
    this.nuevoNameB = "divTcbes" + this.iteranteDos; 
    this.nuevoNameprrfLT = "varLT" + this.iteranteDos; 
    this.nuevoNameprrfDT = "varDT" + this.iteranteDos; 
    this.nuevoNameprrfTE = "varTE" + this.iteranteDos; 
    this.nuevoNameCBES = "divTcbes" + this.iteranteDos; 
    setTimeout(()=>{
      this.divTemp.last.nativeElement.setAttribute('id',`${this.nuevoId}`);
      this.divTemp.last.nativeElement.setAttribute('name',`${this.nuevoName}`);
      this.divTemp.last.nativeElement.setAttribute('nameb',`${this.nuevoNameB}`);
      this.conjprrfLT.last.nativeElement.setAttribute('namelt',`${this.nuevoNameprrfLT}`);
      this.conjprrfDT.last.nativeElement.setAttribute('namedt',`${this.nuevoNameprrfDT}`);
      this.conjprrfTE.last.nativeElement.setAttribute('namete',`${this.nuevoNameprrfTE}`);
      this.cbElimSecc.last.nativeElement.setAttribute('name',`${this.nuevoNameCBES}`);
      
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
      //this.cerrarModal();
    }else{
      this.datosGuardados = false;
    }
    //this.descripcionTarea.push(this.entradaDT); 
  }

  cerrarModal():void{
    //
  }

  eleccionSeccionAEliminar():void{
    this.visibCB = false;
  }

  eliminarSeccion():void{
    this.cbElimSecc.forEach((eCBs)=>{
      if(eCBs.nativeElement.checked)
      {
        this.arrCBparaTempEliminar.push(eCBs);
      }else
          {
          this.arrCBparaTempResetear.push(eCBs);
          }
    });
    console.log('checkBox elegidos: ');
    this.arrCBparaTempEliminar.forEach((eAdelet)=>
        {
          console.log(eAdelet.nativeElement.getAttribute('name'));
          var i=1;
          var iConjLab=this.divTemp.length; 
          for(i=1; i<=iConjLab; i++){
            //console.log('ingresa al for:')
            //console.log(eAdelet.nativeElement.getAttribute('name'));
            switch(eAdelet.nativeElement.getAttribute('name')){
              case 'divTcbes' + `${i}`:
                //console.log('ingresa al case:')
                //console.log(eAdelet.nativeElement.getAttribute('name'));
                this.divTemp.forEach((e_A_eliminar)=>{
                  /* console.log('foreach previo al if: ')
                  console.log(e_A_eliminar.nativeElement.getAttribute('nameb'));
                  console.log('Coinciden los siguientes attrb: ');
                  console.log(e_A_eliminar.nativeElement.getAttribute('nameb') === eAdelet.nativeElement.getAttribute('name')); */
                  if(e_A_eliminar.nativeElement.getAttribute('nameb') === eAdelet.nativeElement.getAttribute('name'))
                    { 
                      console.log('cbox Eliminados serán:');
                      console.log(e_A_eliminar.nativeElement.getAttribute('nameb'));
                      e_A_eliminar.nativeElement.remove();
                    }else
                        {
                          //NO HACE NADA;
                        }
                });
                break;
            }
          };
          //
        });
    console.log('checkBox No elegidos: ');
    this.arrCBparaTempResetear.forEach((eAreset)=>{console.log(eAreset.nativeElement.getAttribute('name'));});
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
    this.visibCB = true;
    this.nuevoNameCBES = "";
    this.arrCBparaTempEliminar = [];
    this.arrTempResetear = [];
    this.arrCBparaTempResetear = [];
   }

  ngOnInit(): void {
  }
  
  ngAfterViewInit():void{

  }
}
