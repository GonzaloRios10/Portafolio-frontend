import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
	// url = 'http://localhost:8080/persona/';
	url = 'https://backendportafolio-riosgonzalo.herokuapp.com/persona/';
  
  	constructor(private httpClient : HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.url + `detail/${id}`);
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, persona);
  }

}