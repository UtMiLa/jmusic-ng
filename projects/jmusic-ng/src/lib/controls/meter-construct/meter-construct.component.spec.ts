/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeterConstructComponent } from './meter-construct.component';

describe('MeterConstructComponent', () => {
  let component: MeterConstructComponent;
  let fixture: ComponentFixture<MeterConstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterConstructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
