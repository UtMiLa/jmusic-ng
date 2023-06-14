import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffConstructComponent } from './staff-construct.component';

describe('StaffConstructComponent', () => {
  let component: StaffConstructComponent;
  let fixture: ComponentFixture<StaffConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffConstructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
