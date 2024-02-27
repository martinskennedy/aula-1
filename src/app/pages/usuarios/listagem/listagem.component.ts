import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemUsuariosComponent {
  tituloDaPagina: String = 'Usuários';
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, error => {
      console.error(error);
    })
  }

  removerUsuario(id: number) {
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
        this.usuariosService.removerUsuario(id).subscribe(
          (result) => {
            this.usuarios = this.usuarios.filter(usuarioLista =>
              usuarioLista.id != id)
            Swal.fire({
              title: 'Removido!',
              text: 'Seu usuário foi removido',
              icon: 'success',
            });
            this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
          },
          (erro) => {
            console.error(erro);
          }
        );
      }
    });
  }
}
