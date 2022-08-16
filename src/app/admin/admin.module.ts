import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { WordcountPipe } from '../wordcount.pipe';




@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    EditComponent,
    WordcountPipe

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
       
   
  ],
 
})
export class AdminModule { }
