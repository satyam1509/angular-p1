import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: any;
  username:string="";
  password:string="";
  constructor(private http: HttpClient,private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {}

  login() {
    // console.log({username:this.username.,
    //   password:this.password});
    console.log('login clicked');
    this.http
      .post('https://ai-lab-backend.herokuapp.com/api/v1/auth/login', {
        username: 'patel1996satyam@gmail.com',
        password: 'Pass@1234',
      })
      .subscribe({
        next: (response) => {
          console.log('post request working !!', response);
          localStorage.setItem('userinfo', JSON.stringify(response));
          this.createFAQ();
        },
        error: (error) => {
          console.log('error occurs', error);
        },
      });
  }

  createFAQ() {
    let userinfo: any = localStorage.getItem('userinfo') || '{}';
    userinfo = JSON.parse(userinfo);
    if (userinfo?.access_token) {
      this.http
        .post(
          'https://ai-lab-backend.herokuapp.com/api/v1/admin/faq',
          { question: 'string', answer: 'string', botId: 'string' },
          {
            headers: {
              Authorization: `Bearer ${userinfo.access_token}`,
            },
          }
        )
        .subscribe({
          next: (response) => {
            console.log('FAQ response', response);
            this.router.navigate(["/dashboard"]);
          },
          error: (error) => {
            console.log('FAQ ERROR', error);
          },
        });
    } else {
      alert('Please Login!!!!');
    }
  }
}
