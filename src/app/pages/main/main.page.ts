import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit{


  ngOnInit() {    
  }


  login: any;

  constructor(
    public alertController: AlertController,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    // Recibir la información del login
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.login = this.router.getCurrentNavigation()?.extras.state?.['login'];
        // Mostrar en consola
        console.log(this.login);
      }
    });
  }

// Creación de alerta
async presentAlert(msgHeader: string, msg: string) {
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
