import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {

  constructor(private alertController: AlertController,
    private router: Router) { }

  RegistarseAlerta() {
    this.presentAlert(
      'exito', 
      'Sea a registrado correctamente'
    );
  }

  // Creación de alerta
  private async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
