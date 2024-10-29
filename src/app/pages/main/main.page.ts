import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/components/add-update-product/add-update-product.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit{


  ngOnInit() {    
  }

  utilsSvc = inject(UtilsService);

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

// ========== Agregar o actualizar productos ==========
addUpdateProduct() {
  this.utilsSvc.presentModal({
    component: AddUpdateProductComponent,
    cssClass: 'add-update-modal'
  })
}


  
}
