import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { DefaulpageComponent } from './defaulpage/defaulpage.component';
import { HomeComponent } from './home/home.component';

import { SmokeComponent } from './smoke/smoke.component';
import { SatisticComponent } from './satistic/satistic.component';
import { AboutComponent } from './about/about.component';
import { StepComponent } from './step/step.component';



@NgModule({
  declarations: [
    AppComponent,
    DefaulpageComponent,
    HomeComponent,
    SmokeComponent,
    SatisticComponent,
    AboutComponent,
    StepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
