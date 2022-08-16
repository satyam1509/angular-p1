import { createComponent, NgModule } from '@angular/core';
import { CreateComponent } from './admin/create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { EditComponent } from './admin/edit/edit.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: SignupComponent,
    path: 'signup',
  },
  {
    component: AboutusComponent,
    path: 'about',
  },
  {
    component: ContactusComponent,
    path: 'contact',
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
  },
  {
    component:CreateComponent,
    path:'create',
  },
  {
    component:EditComponent,
    path:'dashboard/edit/:dataId'
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    component:NotfoundComponent,
    path:'**'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
