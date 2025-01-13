import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent  // Declarar UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Adicionar FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
