import { Component, inject, PLATFORM_ID } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import { AuthserviceService } from '../../Servizi/authservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private readonly platformId = inject(PLATFORM_ID);

  private url_call= "https://newdatasystem.myftp.biz/"
  //private url_call= "http://192.168.1.254:8080/"
  auth!:any;
  durationInSeconds = 5;
  authRout=false;
  encPassword!: string;
  link:any
  private x:AuthserviceService=new AuthserviceService();
  constructor(private api:HttpClient, private router: Router, ) {
     if(isPlatformBrowser(this.platformId)){ 
      localStorage.setItem('server', 'https://cvggold-dash.ns0.it');
      this.link = sessionStorage.getItem('server')+"/img/logodef.png";
     }
    
   }
  login(i:string, p:string){
      let resp:any;
      const body = this.x.setUsers(i, p);
      console.log(body)
      const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})}
      this.api.post(this.url_call+"External/Authentication/Authpage.php", body).subscribe(
        data=>{
          resp = data;
            if(resp['stato'] == 'OK'){
              this.x.loginSetting(resp['id'],p,resp['idss'], resp['Tipo'], resp['path'])
              this.router.navigate(['Home']);
              window.location.reload()
            }else{
              console.log("Errore Login")
            }
        }
      )
  }

}
