
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {Http, Response, Headers,RequestOptionsArgs,RequestOptions, RequestMethod} from '@angular/http';

import {serviceIP} from './config';


@Injectable()
export class HttpService{
constructor(public http:Http){

}

 public post(method, content) {

   // let params = this.handleParams(content);

    return this.http.post(serviceIP+ method, content).map(res => {
        if (res.json().success === 1) {
            console.log("接口请求成功");
          console.log(res.json());

          //  this.navc.push(LoginPage);
            return res.json();

        } else {
          console.log("接口请求失败");
           return res.json();
        }
      })
}

/**
 *
 *
 *
 * @memberof HttpService

public request(url:string,options:RequestOptionsArgs):Observable<Response>{
  url= HttpService.replaceUrl(url);
  return Observable.create((observer)=>{
   this.http.request(url,options).subscribe(res=>{
     observer.next(res);
   },err=>{
     observer.error(err);

   });



   });
}

public post(url:string,body:any=null):Observable<Response>{
  return this.request(url,new RequestOptions({
      method:RequestMethod.Post,
      body:body,
      headers:new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
      })

  }))

}


  private static replaceUrl(url) {
    if (url.indexOf('http://') == -1) {
      url = 'http://127.0.0.1:3000'+ url;
    }
    return 'http://' + url.substring(7).replace(/\/\//g, '/');
  }

*/

}






































  // public post(url: string, body: any = null){
  //    this.http.request(url, new RequestOptions({
  //     method: RequestMethod.Post,
  //     body: body,
  //     headers: new Headers({
  //       'Content-Type': 'application/json; charset=UTF-8'
  //     })
  //   })).subscribe(res => {

  //       console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'res', res);
  //       return res;
  //      // observer.next(res);
  //     }, err => {
  //    //   observer.error(err);
  //       return err;
  //     });

  //   ;
  // }





