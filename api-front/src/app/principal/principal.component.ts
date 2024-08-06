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

//Variável para vosibilidade da tebela
tabela:boolean = true;

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

  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      //Cadastrar o client no vetor
      this.clientes.push(retorno);

      //Limpar formulario
      this.cliente = new Cliente();

      //Mensagem
      alert('Cliente cadastrado com sucesso!');
    });
  }

//Metodo para selecionar um cliente especifico
selecionarCliente(posicao:number):void{

  //Selecionar cliente no vetor
  this.cliente = this.clientes[posicao];


//Cisibilidade do botão
this.btnCadastro = false;


  //Visibilidade da tabela
  this.tabela = false;
}


  //Visibilidade

  //Método de inicializaçãao
  ngOnInit(){
      this.selecionar();

  }
}
