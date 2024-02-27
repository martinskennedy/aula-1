import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})
export class CadastroEdicaoUsuariosComponent {

constructor(private usuariosService: UsuariosService, private router: Router, private route: ActivatedRoute) {

}

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  });

  id: number = 0;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    try {
      const idNumber = Number(id);

      if (idNumber) {
        this.id = idNumber;
        this.usuariosService.buscarUsuarioPorId(idNumber).subscribe
        (usuario => {
        //console.log(usuario);
          this.usuarioForm.patchValue({
          nome: usuario.nome,
          idade: usuario.idade
          })
        })
      }

    } catch (error) {
      console.error(error)
    }
  }

  cadastrarEditarUsuarios() {
    //console.log(this.usuarioForm.value)   
    const usuario: IUsuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    if (this.id) {
      usuario.id = this.id;
    }

    this.usuariosService.cadastrarEditarUsuario(usuario).subscribe(
      (result) => {
        //console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: `Usuário ${this.id ? 'editado': 'cadastrado'} com sucesso!`,
          icon: "success"
        });
        this.router.navigateByUrl('/usuarios');
      },
      (erro) => {
        console.error(erro);
      }   
    );
  }
}
