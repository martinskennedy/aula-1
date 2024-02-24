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
  })

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
  }

  cadastrarUsuarios() {
    //console.log(this.usuarioForm.value)
    
    const usuario: IUsuario = this.usuarioForm.value as IUsuario;

    usuario.ativo = true;

    this.usuariosService.cadastrarUsuario(usuario).subscribe(
      (result) => {
        //console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: "Usuário cadastrado com sucesso!",
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
