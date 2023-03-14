/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WbVarListComponent } from './wb-var-list.component';

describe('WbVarListComponent', () => {
  let component: WbVarListComponent;
  let fixture: ComponentFixture<WbVarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbVarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbVarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
