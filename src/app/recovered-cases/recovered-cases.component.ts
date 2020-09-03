import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-recovered-cases',
  templateUrl: './recovered-cases.component.html',
  styleUrls: ['./recovered-cases.component.css']
})
export class RecoveredCasesComponent implements OnInit {
  countries:any;
  country = 'India';
  recovered:Number;
  
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
    this.recovered = data[index].Recovered;
  })
  }
}
