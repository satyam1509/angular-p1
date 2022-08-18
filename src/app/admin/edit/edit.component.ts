import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editId: number = 0;
  editData: any = {};
  title: string = '';
  author: string = '';
  content: string = '';

  editform = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [Validators.required,Validators.minLength(5),]),
  });

  constructor(
    public dts: DataTransferService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.editId = +params['dataId'];
      // console.log(this.editId);
      this.editData = this.dts.data.find((d) => {
        // console.log('d id' + d.id);
        if (d.id == this.editId) {
          return true;
        }
        return false;

      });

      this.editform.controls['title'].setValue(this.editData.title);
      this.editform.controls['author'].setValue(this.editData.author);
      this.editform.controls['content'].setValue(this.editData.content);
      // this.title = this.editData.title;
      // this.author = this.editData.author;
      // this.content = this.editData.content;
    });
    // console.log('this.title' + this.author);
    console.log(this.editform.value);
  }

  ngOnInit(): void {}

  edit() {
    if (this.editform.valid) {
      // this.dts.data.map((data) => {
      //   if (data.id == this.editData.id) {
      //     data.title = this.title;
      //     data.author = this.author;
      //     data.content = this.content;
      //   }
      // });
      let dt = this.editform.value;
      this.editData.title = dt.title;
      this.editData.author = dt.author;
      this.editData.content = dt.content;
    }
    this.router.navigate(['dashboard']);
  }
}
