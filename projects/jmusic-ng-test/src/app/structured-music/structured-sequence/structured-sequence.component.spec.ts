import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredSequenceComponent } from './structured-sequence.component';

describe('StructuredSequenceComponent', () => {
  let component: StructuredSequenceComponent;
  let fixture: ComponentFixture<StructuredSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
