import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealfullService {

  constructor(private httpclient: HttpClient){

  }

  getAllItems(){
    return this.httpclient.get('http://localhost:3000/fooditems')
  }
}
