import { Component } from '@angular/core';
import { MealfullService } from '../mealfull.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  food: any={}
  constructor(private mealfullService: MealfullService){
    
  }

  addtoFoodItems(food: any){
    this.mealfullService.addtoFoodItems(food).subscribe(food)
    alert("Hurray! Item added!")
  }
}
