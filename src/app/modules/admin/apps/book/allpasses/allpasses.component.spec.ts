import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpassesComponent } from './allpasses.component';

describe('AllpassesComponent', () => {
  let component: AllpassesComponent;
  let fixture: ComponentFixture<AllpassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
