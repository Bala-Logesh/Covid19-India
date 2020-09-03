import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-death-cases',
  templateUrl: './death-cases.component.html',
  styleUrls: ['./death-cases.component.css']
})
export class DeathCasesComponent implements OnInit {
  countries:any;
  country = 'India';
  deaths:Number;
  
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
    this.deaths = data[index].Deaths;
  })
  }
}
