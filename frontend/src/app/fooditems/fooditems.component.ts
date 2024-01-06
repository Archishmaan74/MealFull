import { Component } from '@angular/core';
import { MealfullService } from '../mealfull.service';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent {
  food: any=[]
  constructor(private mealfullService: MealfullService){
    this.mealfullService.getAllItems().subscribe((data)=>{
      this.food = data
    },(err)=>{
      console.log("Cannot fetch getAllitems...");
    })
  }

  addtoChart(food: any){
    this.mealfullService.addtoChart(food).subscribe(food)
    alert("Item added to chart!")
    location.reload();
  }
}
