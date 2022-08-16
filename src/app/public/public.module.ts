import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
