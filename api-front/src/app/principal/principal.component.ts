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




//Metodo para editar cliente
editar():void{
  this.servico.editar(this.cliente)
  .subscribe(retorno =>{

    //Obter posição do vetor onde está o cliente
    let posicao = this.clientes.findIndex(obj => {
      return obj.codigo == retorno.codigo;
    });

    //Alterar os dados do cliente no vetor
    this.clientes[posicao] = retorno;

    //limpar formulario
    this.cliente = new Cliente();

    //Visibilidade dos botões
    this.btnCadastro = true;

    //Visibilidade tabela
    this.tabela = true;

    //Mensagem
    alert('Cliente alterado com sucesso!')
  })
}



//Metodo para remover cliente
remover():void{
  this.servico.remover(this.cliente.codigo)
  .subscribe(retorno =>{

    //Obter posição do vetor onde está o cliente
    let posicao = this.clientes.findIndex(obj => {
      return obj.codigo == this.cliente.codigo;
    });

    //Remover cliente do vetor
    this.clientes.splice(posicao, 1);

    //limpar formulario
    this.cliente = new Cliente();

    //Visibilidade dos botões
    this.btnCadastro = true;

    //Visibilidade tabela
    this.tabela = true;

    //Mensagem
    alert('Cliente removido com sucesso!')
  })
}


  //Método para cancelar
  cancelar():void{


  //limpar formulario
  this.cliente = new Cliente();

  //Visibilidade dos botões
  this.btnCadastro = true;

  //Visibilidade tabela
  this.tabela = true;

  };

  //Método de inicializaçãao
  ngOnInit(){
      this.selecionar();

  }
}
