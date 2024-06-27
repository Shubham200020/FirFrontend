import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirComponent } from './fir.component';

describe('FirComponent', () => {
  let component: FirComponent;
  let fixture: ComponentFixture<FirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
