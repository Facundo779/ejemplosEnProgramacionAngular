import { Component, OnInit, AfterViewInit, TemplateRef, QueryList, ElementRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-set-attrib-temp',
  templateUrl: './set-attrib-temp.component.html',
  styleUrls: ['./set-attrib-temp.component.css']
})
export class SetAttribTempComponent implements OnInit, AfterViewInit {

  lugarDeTrabajo: any[];
  descripcionTarea: any[];
  nameParrafoTemp: string[];
  namebParrafoTemp: string[];
  idParrafoTemp: string[];
  arr: string[];
  nuevoName: string;
  nuevoNameB: string;
  nuevoId: string;
  iterante: number;
  numDeTempAIterar: number;
  iteranteTemp: number;
  nuevoNameParrafLT: string;
  nuevoNameParrafTR: string;

  @ViewChild('nuevaSeccion') btnNewWork:any;
  @ViewChild('temBase') newTemp!: TemplateRef<any>;
  @ViewChild('temBase', {read:ViewContainerRef}) newContTemp!: ViewContainerRef;
  @ViewChildren('varLT') conjParrfLT!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('varTR') conjParrfTR!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('parrafoTemp') parTemp!: QueryList<ElementRef<HTMLDivElement>>;
  //@ViewChildren('parrafoTemp') parTemp!: QueryList<ElementRef<any>>; //ESTO SIRVE PARA METERLO EN UN ARRAY


  nuevoTempYseteoAtrib():void{
    this.newContTemp.createEmbeddedView(this.newTemp);
    this.iterante = this.iterante + 1; 
    this.nuevoId = "divParrafoTemp" + this.iterante;
    this.nuevoName = "divParrafoTemp" + this.iterante; 
    this.nuevoNameB = "divParrafoTemp" + this.iterante; 
    this.nuevoNameParrafLT = "varLT" + this.iterante; 
    this.nuevoNameParrafTR = "varTR" + this.iterante; 
    setTimeout(()=>{
      this.parTemp.last.nativeElement.setAttribute('id',`${this.nuevoId}`);
      this.parTemp.last.nativeElement.setAttribute('name',`${this.nuevoName}`);
      this.parTemp.last.nativeElement.setAttribute('nameb',`${this.nuevoNameB}`);
      this.conjParrfLT.last.nativeElement.setAttribute('nameLT',`${this.nuevoNameParrafLT}`);
      this.conjParrfTR.last.nativeElement.setAttribute('nameTR',`${this.nuevoNameParrafTR}`);
      console.log(this.parTemp.last.nativeElement);
      this.lugarDeTrabajo.push(this.iterante);
      //console.log(this.lugarDeTrabajo);
      /* console.log('click');
      console.log(this.parTemp.last);
      console.log('click');
      console.log(this.parTemp); */
    }, 100);
    
     /* this.parTemp.forEach((pT)=>{
        
        this.iterante = this.iterante + 1;

        this.nuevoId = "parrafoTemp" + this.iterante;
        this.nuevoName = "parrafoTemp" + this.iterante;
        this.nuevoNameB = "parrafoTemp" + this.iterante;
        
        pT.nativeElement.setAttribute('id', `${this.nuevoId}`);
        pT.nativeElement.setAttribute('name', `${this.nuevoName}`);
        pT.nativeElement.setAttribute('nameb', `${this.nuevoNameB}`); 

        console.log(pT.nativeElement);
        console.log(pT.nativeElement.getAttribute('id'));
        console.log(pT.nativeElement.getAttribute('name'));
        console.log(pT.nativeElement.getAttribute('nameb')); 
      });   */
    
    /* //Es funcional 
    this.numDeTempAIterar = this.parTemp.length;
    for(this.iteranteTemp; this.iteranteTemp <= this.numDeTempAIterar; this.iteranteTemp++){
      this.parTemp.forEach((pT)=>{

      })
    } */
  } 

  constructor() {
    this.lugarDeTrabajo = ["LugDeTrabUno", "LugDeTrabDos", "LugDeTrabTres"];
    this.descripcionTarea = ["TareaRealizUno", "TareaRealizDos", "TareaRealizTres"];
    this.nameParrafoTemp = [];
    this.namebParrafoTemp = [];
    this.idParrafoTemp = [];
    this.arr = [];
    this.nuevoId="";
    this.nuevoName="";
    this.nuevoNameB="";
    this.iterante = 0;
    this.numDeTempAIterar = 0;
    this.iteranteTemp = 1;
    this.nuevoNameParrafLT = "";
    this.nuevoNameParrafTR = "";
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    /*     this.btnNewWork.nativeElement.addEventListener('click', ()=>{
          this.newContTemp.createEmbeddedView(this.newTemp);
        }); */
      }

}
