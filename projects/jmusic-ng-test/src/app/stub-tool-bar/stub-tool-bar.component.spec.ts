import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubToolBarComponent } from './stub-tool-bar.component';

describe('StubToolBarComponent', () => {
  let component: StubToolBarComponent;
  let fixture: ComponentFixture<StubToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
