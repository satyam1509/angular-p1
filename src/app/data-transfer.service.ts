import { Injectable } from '@angular/core';
// import { Data } from './data';

export class DataModel {
  id: number =0;
  title:any='';
  author: any='';
  content: any='';
}

@Injectable({
  providedIn: 'root',
})

export class DataTransferService {
  
    data: DataModel[] = [

      {
        id:1,
        title:"this is title",
        author:"Mark",
        content:"this is content",

      },
      {
        id:2,
        title:"this is title2",
        author:"Mark2",
        content:"this is content2",

      },
      
    ]

    
  }

