import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';


import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

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
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


