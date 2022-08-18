
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  username:string="";
  password:string="";
  
  loginform = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required])
})

  constructor(private http: HttpClient,private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    // console.log(this.username);
  }


  login() {
    // console.log({username:this.username,
    //   password:this.password});
    console.log('login clicked!!!');
 
    this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/login', {
        username: this.loginform.value.email,
        password: this.loginform.value.password
      })
      .subscribe({
        next: (response) => {
          console.log('post request working !!', response);
          localStorage.setItem('userinfo', JSON.stringify(response));
          this.createFAQ();
        },
        error: (error) => {
          console.log('error occurs', error);
          alert("invalid username or password!!  Try Again");
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
              "Authorization": `Bearer ${userinfo.access_token}`,
            }
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
