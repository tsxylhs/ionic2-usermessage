import { HttpService } from './../../../providers/httpService';

import { Component, ViewChild  } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HttpService } from '../../../providers/httpService';

@Component({
  selector: 'my-signaturePad',
  template: `<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>`
})

export class SignaturePadPage{

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor(
    private HttpService:HttpService
  )
   {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
   // console.log(this.signaturePad.toDataURL());
    let data={
     imagedata:this.signaturePad.toDataURL()
    }
 this.HttpService.post("qianming",data).subscribe(
   data=>{
           if(data.success===1){
             alert("上传成功")
           }
           else{
             alert("上传失败")
           }


   }
 )

  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
