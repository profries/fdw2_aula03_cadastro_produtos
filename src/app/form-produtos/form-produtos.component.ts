import { Component } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  produto: any = {id: 0, nome:"", preco: 0}
  produtos: any[] = []

  cadastrar() {
    alert(this.produto.nome+" cadastrado com sucesso!");
    this.produtos.push(this.produto);
    this.produto = {id: 0, nome:"", preco: 0}
  }
}
