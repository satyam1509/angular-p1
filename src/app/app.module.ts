import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { NotfoundComponent } from './notfound/notfound.component';
// import { WordcountPipe } from './wordcount.pipe';
// import { FormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    AuthModule,
    AdminModule,
    // FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
