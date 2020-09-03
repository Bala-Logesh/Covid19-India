import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { RecoveredCasesComponent } from './recovered-cases/recovered-cases.component';
import { DeathCasesComponent } from './death-cases/death-cases.component';

const routes: Routes = [
  {path : 'totalCases', component:TotalCasesComponent},
  {path : 'recoveredCases', component:RecoveredCasesComponent},
  {path : 'deathCases' , component:DeathCasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TotalCasesComponent, RecoveredCasesComponent, DeathCasesComponent];