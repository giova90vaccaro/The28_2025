import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Pagine/login/login.component';
import { AuthserviceService } from './Servizi/authservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The28_2025';
  showFiller=true;

  private x:AuthserviceService=new AuthserviceService();
  session:any
  constructor(private rout: Router){
    console.log(this.session)
    this.session = this.x.controlSession();
    console.log(this.session+" Valore Sessione")
  }

  logOut(){
    window.location.reload()
  }

   ClickNav(v_in:String){
    this.rout.navigate(["/"+v_in]);
  }
}
