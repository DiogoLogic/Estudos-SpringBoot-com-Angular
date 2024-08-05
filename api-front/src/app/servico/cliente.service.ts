import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private url:string = 'http://localhost:9090';

  constructor(private http:HttpClient) { }

  // Metodo para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

}
