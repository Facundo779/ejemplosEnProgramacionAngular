import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
  
    //document.querySelector(`[nameb="${target_nameBPro}"]`).textContent=prompt('');
    //this.nombre = `${prompt('')}`; <---FUNCIONA
    

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDEComponent implements OnInit, AfterViewInit{
  nombre: string;
  apellido: string;
  direccion: string;
  habilitarCargaDatos: boolean;
  arr: string[];

  @ViewChildren('var') name!:QueryList<ElementRef<HTMLParagraphElement>>;
  //@ViewChild('varA') surname:any;
  //@ViewChild('varD') direction:any;
  variacionArreglo='';


  //introDatos() {

       /* this.name.forEach((elemento)=>{
        elemento.nativeElement.addEventListener('click', ()=>{
          switch(`${elemento.nativeElement.getAttribute('name')}`){
            case 'varN': this.nombre = `${prompt('')}`;
            break;
            case 'varA': this.apellido = `${prompt('')}`;
            break;
            case 'varD': this.direccion = `${prompt('')}`;
            break;
          }
         })
        }); */
        //console.log(elemento.nativeElement.getAttribute('name'));
      //this.arr.push(`${elemento.nativeElement.getAttribute('name')}`);
      //console.log(this.arr);
        //}); 
    
      
       /* switch(this.name){
        case 'varN': this.nombre = `${prompt('')}`;
        break;
        case 'varA': this.apellido = `${prompt('')}`;
        break;
        case 'varD': this.direccion = `${prompt('')}`;
        break;
      }  */
    
    //console.log(this.name);
    /* this.arr.push(this.name.nativeElement, this.surname.nativeElement, this.direction.nativeElement);
    //console.log(this.arr);
    this.arr.forEach((eA)=>{
      switch(eA){
        case 'varN': this.nombre = `${prompt('')}`;
        break;
        case 'varA': this.apellido = `${prompt('')}`;
        break;
        case 'varD': this.direccion = `${prompt('')}`;
        break;
      }
    })  */
  //}
  /* FUNCIONA CORRECTAMENTE PERO TE HACE COMPLETAR TODOS LOS CAMPOS Y NO SOLO EL SELECCIONADO
  switch(eA){
    case 'varN': this.nombre = `${prompt('')}`;
    break;
    case 'varA': this.apellido = `${prompt('')}`;
    break;
    case 'varD': this.direccion = `${prompt('')}`;
    break;
  }*/
  /* 
    this.arr.push(`${prompt('')}`); << introduce en el array un elemento desde el prompt 
    this.name.nativeElement.textContent = c; << cambia el nombre del elemento seleccionado, ej: se llamaba nombre y luego facundo.
    */
   /*
    this.arr.push(this.name.nativeElement.getAttribute('name'), this.surname.nativeElement.getAttribute('name'), this.direction.nativeElement.getAttribute('name'));
    console.log(this.arr);
    this.arr.forEach((eA)=>{
      this.variacionArreglo = eA; 
      console.log(this.variacionArreglo);
    }) 
  */
  /* document.querySelector(`[nameb="${target_nameBPro}"]`).textContent=prompt(''); */
  //this.nombre = `${prompt('')}`; <---FUNCIONA
    
  constructor() { 
    this.nombre = "";
    this.apellido = "";
    this.direccion = "";
    this.habilitarCargaDatos = false;
    this.arr = [];

  }

  ngOnInit(): void {
    
    //this.arr.push(this.name.nativeElement);
    /*introDatos(this.arr){
      this.habilitarCargaDatos= true;
      const varN = this.name.nativeElement;
      console.log(varN);
      this.arr.forEach((elementA)=>{
        switch(elementA.getAttribute('name')){
          case "varN": this.nombre = `${prompt('')}`; 
          break;
          case "varA": this.apellido = `${prompt('')}`; 
          break;
        }
      });
    } */

  }

  ngAfterViewInit():void{
    this.name.forEach((elemento)=>{
      elemento.nativeElement.addEventListener('click', ()=>{
        switch(`${elemento.nativeElement.getAttribute('name')}`){
          case 'varN': this.nombre = `${prompt('')}`;
          break;
          case 'varA': this.apellido = `${prompt('')}`;
          break;
          case 'varD': this.direccion = `${prompt('')}`;
          break;
        }
       })
      });
  }

}