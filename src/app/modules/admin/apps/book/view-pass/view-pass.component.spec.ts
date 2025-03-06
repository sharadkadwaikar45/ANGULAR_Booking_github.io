import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassComponent } from './view-pass.component';

describe('ViewPassComponent', () => {
  let component: ViewPassComponent;
  let fixture: ComponentFixture<ViewPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
