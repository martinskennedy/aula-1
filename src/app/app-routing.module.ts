import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuarios', component: ListagemUsuariosComponent},
  {path: 'produtos', component: ListagemProdutosComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }*/
