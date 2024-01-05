import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemsComponent } from './fooditems.component';

describe('FooditemsComponent', () => {
  let component: FooditemsComponent;
  let fixture: ComponentFixture<FooditemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooditemsComponent]
    });
    fixture = TestBed.createComponent(FooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
