import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { ChartComponent } from './chart/chart.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { mealfullGuard } from './mealfull.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home',  component: HomeComponent
  },
  {
    path: 'fooditems', component: FooditemsComponent 
  },
  {
    path: 'add', component: AddfoodComponent, canActivate: [mealfullGuard]
  },
  {
    path: 'chart', component: ChartComponent
  },
  {
    path: '**', component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
