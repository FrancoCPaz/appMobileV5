import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Declaro el modelo
  login: any = {
    usuario: '',
    password: '',
  };

  // Variable para guardar campos vacíos
  field: string = '';

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  // Función para llevar el modelo al home
  ingresar() {
    if (this.validateModel(this.login)) {
      this.presentToast('bottom', 'Bienvenida ' + this.login.usuario);
      let navigationExtras: NavigationExtras = {
        state: { login: this.login },
      };
      console.log('Redirigiendo a /main...'); // Debug
      this.router.navigate(['/main'], navigationExtras);
    } else {
      this.presentToast('middle', 'Falta el campo ' + this.field, 3000);
    }
  }
  

  // Generación del present toast
  async presentToast(
    position: 'top' | 'middle' | 'bottom',
    msg: string,
    duration?: number
  ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration || 2000,
      position: position
    });
    await toast.present();
  }

  // Validación del modelo
  validateModel(model: any) {
    for (let [key, value] of Object.entries(model)) { 
      if (value == '') {
        this.field = key;
        return false;
      }
    }
    return true;
  }
}
