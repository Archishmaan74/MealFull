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
}
