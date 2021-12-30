import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports:[],
  declarations:[
    LoginComponent
  ],
  providers:[LoginService]
})

export class loginModule{}
