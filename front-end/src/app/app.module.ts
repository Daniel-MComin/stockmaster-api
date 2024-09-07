import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EstoqueModule } from './estoque/estoque.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree'
import { ToastrModule } from 'ngx-toastr';
import { MatTable } from '@angular/material/table';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { RequestSenhaComponent } from './reset-senha/request-senha/request-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetSenhaComponent,
    RequestSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTreeModule, 
    ToastrModule.forRoot(),
    FormsModule, 
    MatTable,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
