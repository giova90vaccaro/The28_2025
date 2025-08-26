import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatCardModule,MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  incasso:any;
  dataSource:any

  displayedColumns = ['Categoria', 'Prodotto', 'Qta', 'Perc']

  constructor(private api:HttpClient, private api2:HttpClient) {
   
  }

  ngOnInit(): void {
     this.api.get("https://cvggold-dash.ns0.it/json/dettagli/test/home.php").subscribe(
      data=>{
        this.incasso = data
      }

    )
    this.api2.get("https://cvggold-dash.ns0.it/json/dettagli/test/items.php").subscribe(
      data=>{
        this.dataSource = data
      }
    )
  }

}
