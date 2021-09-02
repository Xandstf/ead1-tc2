import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtoAtualizado: Produto = undefined;

  produtoParaAtualizar = {
    produto: this.produtoAtualizado,
    index: -1
  }

  listaProdutos: Produto[];

  constructor(private web : WebService) { }

  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res => {
      this.listaProdutos = res;
    });
  }

  deletarProduto(produto) : void {
    this.web.deletarProduto(produto).subscribe( _ => {
      this.listaProdutos.splice(this.listaProdutos.indexOf(produto),1)
      alert(`Produto: ${produto.title} deletado com sucesso!`)
    })
  }

  mostrarAtualizarProduto(produto) : void {
    const { ...prod } = produto
    this.produtoParaAtualizar.produto = prod
    this.produtoParaAtualizar.index = this.listaProdutos.indexOf(produto)
  }

  atualizarProduto() : void {
    this.web.atualizarProduto(this.produtoParaAtualizar.produto).subscribe( _ => {
      this.listaProdutos[this.produtoParaAtualizar.index] = this.produtoParaAtualizar.produto
      alert(`Produto de Id: ${this.produtoParaAtualizar.produto._id} atualizado com sucesso!`)
      this.produtoParaAtualizar.produto = undefined
      this.produtoParaAtualizar.index = -1
    })
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
