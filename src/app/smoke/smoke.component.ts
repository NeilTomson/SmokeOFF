import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smoke',
  templateUrl: './smoke.component.html',
  styleUrls: ['./smoke.component.css']
})
export class SmokeComponent implements OnInit {
  SmokeArray: any[] = [];
  currentDayID = "";
  date: string = "";
  number: string = "";
  dataArray: any[] = []
  costOfPack: number = 1
  timeOfSmoke: number = 1
  pack: number = 1

  constructor(private http: HttpClient) {
    
    this.getSettings()
    this.getAllData()

  }
  setUpdate(data: any) {
    const dateString = data.date;
    const date = new Date(dateString);
    const isoString = date.toISOString().substring(0, 10)
    this.date = isoString;
    this.number = data.number;
    this.currentDayID = data._id;
    console.log(this.currentDayID)
  }

  UpdateRecords() {
    let bodyData = {
      "date": this.date,
      "number": this.number,

    };
    this.http.put("http://localhost:8000/smoke/update" + "/" + this.currentDayID, bodyData).subscribe();
    this.getAllData()
  }
  save() {
    if (this.currentDayID == '') {
      this.register();

    }
    else {
      this.UpdateRecords()
    }

  }
  register() {
    let bodyData = {
      "date": this.date,
      "number": this.number,
    };
    this.http.post("http://localhost:8000/smoke/new", bodyData).subscribe((resultData: any) => {
      alert("Student Registered Successfully")
      this.date = '';
      this.number = "";
    });
    this.getAllData()
  }

  getAllData() {
    this.http.get("http://localhost:8000/smoke/")
      .subscribe((resultData: any) => {
        this.SmokeArray = resultData;
      });
      this.sum()
  }
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/smoke/delete" + "/" + data._id).subscribe();
    this.getAllData()
  }
  ngOnInit(): void {
  }
  getSettings() {
     this.http.get("http://localhost:8000/settings/")
      .subscribe((resultData: any) => {
        if (!resultData[0]) {
          // this.InitData()
        }
        this.dataArray = resultData;
        console.log(this.dataArray)

        this.costOfPack = this.dataArray[0].costOfPack
        this.timeOfSmoke = this.dataArray[0].timeOfSmoke
        this.pack = this.dataArray[0].pack
        console.log(this.timeOfSmoke)
      });
  }
  sum(){
    for (let i = 0; i <this.SmokeArray.length; i++) {
      console.log("helo")
      
    }

  }  


}
