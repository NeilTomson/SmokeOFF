import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satistic',
  templateUrl: './satistic.component.html',
  styleUrls: ['./satistic.component.css']
})
export class SatisticComponent implements OnInit {
  dataArray: any[0] = []

  costOfPack: number = 0
  timeOfSmoke: number = 0
  pack: number = 0
  changeinput : string = ''
  changeValue:number =0
  changeType : string = ''
  hidden: boolean =true

  constructor(private http: HttpClient) {
    this.getStatistic()
  }
  ngOnInit(): void {    
  }

  //update set up
  updatetimeOfSmoke(){
    this.hidden = false
    this.changeValue=this.timeOfSmoke
    this.changeType="time"

  }
  updatecostOfPack(){
    this.hidden = false
    this.changeValue=this.costOfPack
    this.changeType="cost"
  }
  updatePack(){
    this.hidden = false
    this.changeValue=this.pack
    this.changeType="pack"
  }

  //save
  savecostOfPac(){
    let bodyData = {
      "costOfPack": this.changeValue,
      "timeOfSmoke": this.timeOfSmoke,
      "pack":this.pack
    };
    this.costOfPack =this.changeValue
    this.http.put("http://localhost:8000/settings/update" + "/" + this.dataArray[0]._id, bodyData).subscribe();    

  }
  savetimeOfSmoke(){
    let bodyData = {
      "costOfPack": this.costOfPack,
      "timeOfSmoke": this.changeValue,
      "pack":this.pack
    };
    this.timeOfSmoke =this.changeValue
    this.http.put("http://localhost:8000/settings/update" + "/" + this.dataArray[0]._id, bodyData).subscribe();    

  }
  savepack(){
    let bodyData = {
      "costOfPack": this.costOfPack,
      "timeOfSmoke": this.timeOfSmoke,
      "pack":this.changeValue
    };
    this.pack =this.changeValue
    this.http.put("http://localhost:8000/settings/update" + "/" + this.dataArray[0]._id, bodyData).subscribe();    
  }

save(){
  switch (this.changeType){
    case "time":
      this.savetimeOfSmoke()
      break
    
    case "cost":
      this.savecostOfPac()
      break
    
    case "pack":
      this.savepack()
      break
  }  
  this.hidden = true
}
exitChange(){
  this.hidden = true
}
  getStatistic() {
    this.http.get("http://localhost:8000/settings/")
      .subscribe((resultData: any) => {
        if (!resultData[0]) {
          this.InitData()
        }
        this.dataArray = resultData;
        console.log(this.dataArray)

        this.costOfPack = this.dataArray[0].costOfPack
        this.timeOfSmoke = this.dataArray[0].timeOfSmoke
        this.pack = this.dataArray[0].pack
        console.log(this.timeOfSmoke)
      });

  }
  InitData() {
    let bodyData = {
      "costOfPack": 20,
      "timeOfSmoke": 10,
      "pack": 20,
    };
    this.http.post("http://localhost:8000/settings/new", bodyData).subscribe((resultData: any) => {
    });
  }
}
