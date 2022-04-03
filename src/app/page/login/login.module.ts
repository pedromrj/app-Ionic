import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage-angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
