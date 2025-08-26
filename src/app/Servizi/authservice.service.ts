import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

export interface user{
   nomeUtente:String
   password:String
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private readonly platformId = inject(PLATFORM_ID);


  api!:HttpClient
  encryptSecretKey='12345678ijnbvcde4r5t6y7890okmnbvfrtyUIJNMBVCDER456789OKI98765432WSDFGHJKI890PLKJHBVCDE456Y7UJHG'
  user:any
  psw:any
  msgen!:any
  constructor() {
    //this.user = this.encryptData('nomeutente');
   // this.psw = this.encryptData('password');
   }

  public setUsers(a:string, b:string):any{
      let utenza:user={nomeUtente:a, password:b}
      const body = JSON.stringify(utenza);
      return body;
   }

  loginSetting(nome:string,pp:string, idSessione:string, Tipo:string, Path:string):void{
  
    if(isPlatformBrowser(this.platformId)){ 
      sessionStorage.setItem('nome', nome);
      sessionStorage.setItem('idSessione', idSessione);
      sessionStorage.setItem('pp', pp);
      sessionStorage.setItem('Tipo', Tipo);
      sessionStorage.setItem('server', Path);
    /*
    let obj = {
        doc_id: sessionStorage?.getItem('doc_id'),
        batch_no: sessionStorage?.getItem('batch_no')
    }*/
}


 
    console.log('TipoNegozio : '+Tipo)
  
  }
  controlSession():boolean{
     if(isPlatformBrowser(this.platformId)){ 
      if(sessionStorage.getItem('idSessione') === null){
      return false;
    }else{
      return true;
    }
     }
    return false
  }
/*
  encryptData(data:string):string{
    var iv = '4d516e637f8845f8c8890b89bb337818';
    let configuration = {
      keySize: 256,
      iv: CryptoJS.enc.Hex.parse("48656c6c6f2c20576f726c6421"),
      mode: CryptoJS.mode.CBC
    };


    console.log(CryptoJS.enc.Base64.parse("48656c6c6f2c20576f726c6421").toString())

    console.log(CryptoJS.pad.Pkcs7)
     console.log(CryptoJS.enc.Base64.parse(iv))
    this.msgen = CryptoJS.AES.encrypt("Giovanni".trim(), "46d7093c56d9079406754989716a402d".trim(),configuration).toString();
    console.log("encryption   "+this.msgen)

    let decrypted = CryptoJS.AES.decrypt("+jXivqikofXLaYcEktSppg==".trim(), "46d7093c56d9079406754989716a402d".trim()).toString(CryptoJS.enc.Utf8);
    console.log("Dec: " + decrypted)*/
/*
    console.log(this.decryptUsingAES256("0123456789123456", "Giovanni"))
    return this.decryptUsingAES256("0123456789123456", "Giovanni")*/
/*
    return this.encryptUsingAES256("0123456789123456", "Giovanni")

  }
*/

 /* decryptUsingAES256(token:string, word:string):string {
    var decrypted:string
    let _key = CryptoJS.enc.Utf8.parse(token);
    let _iv = CryptoJS.enc.Utf8.parse("1009288");

    return decrypted = CryptoJS.AES.decrypt(
      word, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
  }

  encryptUsingAES256(token:string, word:string):string {
    let _key = CryptoJS.enc.Utf8.parse(token);
    let _iv = CryptoJS.enc.Utf8.parse(token);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(word), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
  }*/
}