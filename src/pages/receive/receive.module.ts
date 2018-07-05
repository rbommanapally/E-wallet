import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivePage } from './receive';
import { NgxQRCodeModule } from 'ngx-qrcode2';
   
@NgModule({
  declarations: [
    ReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivePage),
    NgxQRCodeModule
  ],
})   
export class ReceivePageModule {}
        