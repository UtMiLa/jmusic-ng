import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarToggleButtonComponent } from './toolbar-toggle-button.component';

describe('ToolbarToggleButtonComponent', () => {
  let component: ToolbarToggleButtonComponent;
  let fixture: ComponentFixture<ToolbarToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
