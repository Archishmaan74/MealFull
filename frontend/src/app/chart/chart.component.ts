import { Component } from '@angular/core';
import { MealfullService } from '../mealfull.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  food: any=[]
  constructor(private mealfullService: MealfullService){
    this.mealfullService.getAllItemstoChart().subscribe((data)=>{
      this.food = data
    },(err)=>{
      console.log("Cannot fetch data to chart...");
    })
  }

  createChart(){
    alert("Thanks for using this application but the chart creation & mailing will be added soon...Have a nice day!")
  }

  caloriesCounter(){
    let total=0
    for(let i=0; i < this.food.length; i++){
      if(this.food[i].calories){
        total = total + this.food[i].calories * this.food[i].quantity;
      }
    }
    return total
  }

  carbsCounter(){
    let total = 0
    for(let i=0; i < this.food.length; i++){
      if(this.food[i].carbs){
        total = total + this.food[i].carbs * this.food[i].quantity;
      }
    }
    return total
  }
}
