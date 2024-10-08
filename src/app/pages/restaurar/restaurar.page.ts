import { Component, OnInit, Input, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  firebaseSvc = inject(FirebaseService);

  utilsSvc = inject(UtilsService)

  ngOnInit() {    
  }

  async submit(){
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {

        this.utilsSvc.presentToast({
          message: 'Correo enviado con éxito',
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'mail-outline'
        });

        this.utilsSvc.routerLink('/login');
        this.form.reset();


      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();
      })
    }
  }


}
