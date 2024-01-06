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
  
  getAllItemstoChart(){
    return this.httpclient.get('http://localhost:3000/dietchart')
  }

  addtoChart(food: any){
    return this.httpclient.post('http://localhost:3000/addtochart',food)
  }
}
