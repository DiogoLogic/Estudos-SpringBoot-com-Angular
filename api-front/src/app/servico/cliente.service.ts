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

  //Método para cadastrar clientes
  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,obj);
  }

    //Método para editar clientes
    editar(obj:Cliente):Observable<Cliente>{
      return this.http.put<Cliente>(this.url,obj);
    }

   //Método para editar clientes
   remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/'+ codigo);
  }


}
