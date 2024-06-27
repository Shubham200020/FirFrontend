import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertregComponent } from './insertreg.component';

describe('InsertregComponent', () => {
  let component: InsertregComponent;
  let fixture: ComponentFixture<InsertregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
