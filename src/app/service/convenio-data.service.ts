import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convenio } from '../convenio/convenio.component';


@Injectable({
  providedIn: 'root'
})
export class ConvenioDataService {

  constructor(private http : HttpClient) { }


  retrieveAllConvenios(){
    
    return this.http.get<Convenio[]>(`http://localhost:8080/convenios`);

  }

}
