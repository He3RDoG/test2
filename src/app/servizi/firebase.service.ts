import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private http:HttpClient) { 

  }


  insertPersona(url: string, nome: string, cognome: string) {
  url += `?nome=${nome}&cognome=${cognome}`;
  return this.http.post(url, {});
}

 getPersona(url: string, nome?: string, cognome?: string) {
  if (nome) {
    url += `?nome=${nome}&cognome=${cognome}`;
  }
  console.log(`URL finale: ${url}`);
  return this.http.get(url);
}
}
