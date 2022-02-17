import { Component, OnInit } from '@angular/core';
import { ConvenioDataService } from '../service/convenio-data.service';

export class Convenio {

  constructor(
    public name : string
  ){

  } 

}

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {

  convenios: Convenio[] = [];
  convenioSelecionado! : string ;
  novoConvenio! :string;
  constructor(private service : ConvenioDataService) { }

  ngOnInit(): void {

    this.retrieveAllConvenios();    

}

retrieveAllConvenios(){
  this.service.retrieveAllConvenios().subscribe(
    response => {
      this.convenios = response;
      console.log(this.convenios);
    }
  )
}

onChange(convenioSelecionado : string) {
  console.log(convenioSelecionado);
}
}