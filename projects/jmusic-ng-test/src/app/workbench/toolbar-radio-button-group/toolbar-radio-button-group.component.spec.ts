import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarRadioButtonGroupComponent } from './toolbar-radio-button-group.component';

describe('ToolbarRadioButtonGroupComponent', () => {
  let component: ToolbarRadioButtonGroupComponent;
  let fixture: ComponentFixture<ToolbarRadioButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarRadioButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarRadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
