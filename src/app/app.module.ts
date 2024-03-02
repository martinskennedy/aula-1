import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroEdicaoUsuariosComponent } from './pages/usuarios/cadastro-edicao/cadastro-edicao.component';
import { CadastroEdicaoProdutosComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListagemUsuariosComponent,
    ListagemProdutosComponent,
    CadastroEdicaoUsuariosComponent,
    CadastroEdicaoProdutosComponent,
    HomeComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
