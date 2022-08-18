import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Data } from 'src/app/data';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  
  constructor(public dts: DataTransferService,private router:Router) {}

  ngOnInit(): void {}

  public deletedata(Dataid: number) {
    // console.log(Dataid);
    this.dts.data=this.dts.data.filter((data)=>{
      return data.id !== Dataid;
    })


  }

confirmbox() {
    let text = "Are You Sure??";
    if (confirm(text) == true) {
      this.logout();
    }else{
      this.router.navigate(["/dashboard"]);
    }
    
  }

  logout(){
    localStorage.clear();
    console.log("Logged Out!!!")
  }
}
