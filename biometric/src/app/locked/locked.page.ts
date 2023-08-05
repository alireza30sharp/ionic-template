import { Component, OnInit } from '@angular/core';

import {
  type AuthenticateOptions,
  BiometricAuth,
  BiometryErrorType,
  BiometryType,
  type CheckBiometryResult,
  getBiometryName,
  type ResultError
} from '@aparajita/capacitor-biometric-auth'
import { ModalController } from '@ionic/angular';
import type { SelectCustomEvent } from '@ionic/core'
@Component({
  selector: 'app-locked',
  templateUrl: './locked.page.html',
  styleUrls: ['./locked.page.scss'],
})
export class LockedPage implements OnInit {
  showFallback = true;
  password = '1234';
  hasBiometricAuth = false;
  options: AuthenticateOptions = {
    reason: 'For easy log in',
    cancelTitle: 'cancelTitle',
    iosFallbackTitle: 'Maybe add subtitle here?',
    androidTitle: 'androidTitle',
    androidSubtitle: 'Maybe a description too?',
    allowDeviceCredential: false
  };

  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {
    BiometricAuth.checkBiometry().then((result: CheckBiometryResult) => {
      const isAvailable = result.isAvailable;
      if (isAvailable) {

        this.openBiometricAuth()
      }
    });
  }

  async openBiometricAuth(): Promise<void> {
    try {
      // options is a reactive proxy, we can't pass it directly to a plugin.
      // so pass the underlying object.
      await BiometricAuth.authenticate(this.options).then(() => {
        this.showAlert('Authorization successful!');
      }).catch(() => {

        this.showAlert('Failed to authenticate')
      });


    } catch (error) {

      await this.showAlert(error)
    }
  }


  async checkBiometry() {

    return (await BiometricAuth.checkBiometry()).isAvailable;
  }
  dismissLockScreen() {
    this.modalCtrl.dismiss({ reset: true });
  }
  async showAlert(message: string): Promise<void> {
    alert(message);

  }

  unLock() {
    if (this.password == '1234') {
      this.dismissLockScreen()
    }
  }

}
