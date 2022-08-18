import { Component, OnInit } from '@angular/core';
// import { Data } from 'src/app/data';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  
  constructor(public dts: DataTransferService) {}

  ngOnInit(): void {}

  public deletedata(Dataid: number) {
    // console.log(Dataid);
    this.dts.data=this.dts.data.filter((data)=>{
      return data.id !== Dataid;
    })


  }

  logout(){

    localStorage.clear();
    console.log("Logged Out!!!")
  }
}
