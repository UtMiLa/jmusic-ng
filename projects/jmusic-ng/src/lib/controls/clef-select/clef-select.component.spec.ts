import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClefSelectComponent } from './clef-select.component';

describe('ClefSelectComponent', () => {
  let component: ClefSelectComponent;
  let fixture: ComponentFixture<ClefSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClefSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClefSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
