import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {
  countries:any;
  country = 'India';
  confirmed:Number;
  
  constructor(private corona:CoronaService){}

  ngOnInit(){
    this.corona.getCountries().subscribe((data) => {
        this.countries=data;
    });
    this.getCoronaData();
  }
  getCoronaData(){
    this.corona.getCoronaRealtimeData(this.country).subscribe((data) => {
    var index = data.length - 1;
    this.confirmed = data[index].Confirmed;
  })
  }
}
