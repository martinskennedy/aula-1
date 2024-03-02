import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemProdutosComponent {
  tituloDaPagina: String = 'Produtos';
  produtos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.buscarTodosProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, error => {
      console.error(error);
    })
  }

  removerProduto(id: number) {
    if (id) {
      //console.log(id);
      this.exibirConfirmacao(id);
    }   
  }

  exibirConfirmacao(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Não tem como desfazer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remova',
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtosService.removerProduto(id).subscribe(
          (result) => {
            this.produtos = this.produtos.filter(produtoLista =>
              produtoLista.id != id)
            Swal.fire({
              title: 'Removido!',
              text: 'Seu produto foi removido',
              icon: 'success',
            });
            this.produtos = this.produtos.filter(produto => produto.id != id)
          },
          (erro) => {
            console.error(erro);
          }
        );
      }
    });
  }
}
