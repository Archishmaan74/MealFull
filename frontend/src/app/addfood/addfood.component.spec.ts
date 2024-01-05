import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodComponent } from './addfood.component';

describe('AddfoodComponent', () => {
  let component: AddfoodComponent;
  let fixture: ComponentFixture<AddfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfoodComponent]
    });
    fixture = TestBed.createComponent(AddfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
