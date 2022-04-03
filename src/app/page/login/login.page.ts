import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  username: string;
  password: string;

  constructor(
    public service: LoginService,
    public toastController: ToastController,
    private router: Router) {
  }


  login() {
    
    if (!this.username || !this.password) {
      this.presentToast("Por favor digitar usuario ou senha!");
    } else {
      this.service.findUser(this.username).subscribe( response => {
        if (response && response.length > 0 && response[0].password === this.password) {
          this.router.navigate(["/home", { id : response[0].id }] );
        } else {
          this.presentToast("Senha incorreta!");
        }
      }, error => {
        console.log(error)
      });
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color : "danger"
    });
    toast.present();
  }

}
