import { Component } from '@angular/core';
import { Cliente } from '../Model/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

//Objeto do tipo cliente
cliente = new Cliente();

  //Variavel para visibilidade dos botões
btnCadastro:boolean = true;

// JSON de  clientes
clientes:Cliente[] = [];

//Construtor
constructor(private servico:ClienteService){

}

// Metodo de seleção
  selecionar():void{
  this.servico.selecionar()
  .subscribe(retorno => this.clientes = retorno)
  }

  //Método de inicializaçãao
  ngOnInit(){
      this.selecionar();

  }
}
