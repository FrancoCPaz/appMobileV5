import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    // Código para ejecutar al inicializar el componente, si es necesario
  }

  // Función para mostrar la alerta
  mostrarAlerta() {
    this.presentAlert(
      'Correo enviado', 
      'Se ha enviado un correo a tu cuenta para restablecer tu contraseña'
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
