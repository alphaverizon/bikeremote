import { Component } from '@angular/core';
import { NavController,ToastController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private assets:string="assets/imgs/";
  private readonly flash_on:string='flashon.svg';
  private readonly flash_off:string='flash.svg';
  private readonly find_on:string='findon.svg';
  private readonly find_off:string='find.svg';
  private readonly panic_on:string='panicon.svg';
  private readonly panic_off:string='panic.svg';
  private readonly start_on:string='start.svg';
  private readonly start_off:string='stop.svg';

  private flash:boolean=false;
  private find:boolean=false;
  private panic:boolean=false;
  private start:boolean=false;
  private lock:boolean=true;

  private constants={
    TOP_TYRE:'21 psi',
    BOTTOM_TYRE:'32 psi',
    FUEL:'75%',
    KM: '16732 km',
    POWER: '80',
    MESSAGE:'12:24 Engine has been stopped'
  }
  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {

  }
  onControlClicked(value:string){
    switch (value){
      case 'flash':
            this.flash=!this.flash;
            break;
      case 'find':
            this.find=!this.find;
            break;
      case 'panic':
            this.panic=!this.panic;
            break;
      case 'start':
            this.start=!this.start;
            break;
    }
  }

  onLockClicked(){
    let message=(this.lock) ? 'Bike Locked' : 'Bike Unlocked'; 
    this.lock=!this.lock;
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

 
    
}
