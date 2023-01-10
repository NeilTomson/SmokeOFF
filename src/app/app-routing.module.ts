import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulpageComponent } from './defaulpage/defaulpage.component';
import { HomeComponent } from './home/home.component';
import { SatisticComponent } from './satistic/satistic.component';
import { SmokeComponent } from './smoke/smoke.component';
import {AboutComponent} from './about/about.component';
import {StepComponent} from './step/step.component'

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"form",component:SmokeComponent},
  {path:"about",component:AboutComponent},
  {path:"step",component:StepComponent},
  {path:"statistic",component:SatisticComponent},
  {path: "",redirectTo: "form" , pathMatch:'full'},
  {path: "**",component:DefaulpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
