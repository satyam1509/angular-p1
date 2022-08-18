import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { variationPlacements } from '@popperjs/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {
  submitted:boolean = false;
  // title: string = '';
  // author: string = '';
  // content: string = '';

  form= new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3)]),
    author:new FormControl('',[Validators.required,Validators.minLength(3)]),
    content:new FormControl('',[Validators.required,Validators.required,Validators.minLength(3)]),

  })


  constructor(
    public dts: DataTransferService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public create() {
// this.submitted=true;

if (this.form.valid) {
  
    let id = 0;
    this.dts.data.map((Data) => {
      if (Data.id > id) {
        id = Data.id;
      }
    });
    id++;
    // console.log(id);
    // console.log(this.title);

    this.dts.data.push({
      id: id,
      title: this.form.value.title,
      author: this.form.value.author,
      content: this.form.value.content,
    });

    // console.log(this.form.value.title);
    //   console.log(this.form.value);
 
       this.router.navigate(['dashboard']);
  }
}
}