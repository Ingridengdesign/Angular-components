import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template:`<input type="text" [disabled]="isDisable"/>
  <button type="button" (click)="cliqueBotao()">CLIQUE</button>
  `,
})

//TODO: Crie um botão que quando é pressionado, desabilita um elemento de input
//TODO: Se for pressionado novamente, habilita o elemento de input
export class NovoComponenteComponent  {

  public isDisable: boolean = false;

  public cliqueBotao(){

  this.isDisable = !this.isDisable;

  }


}
