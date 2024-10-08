import { Component, Input } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() login: { usuario: string } = { usuario: '' }; // Valor por defecto

  constructor() {}


  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);


  //======== Cerrar sesión ===========
  signOut() {
    this.firebaseSvc.signOut();
  }
}
