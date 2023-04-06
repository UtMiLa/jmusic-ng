import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyPageComponent } from './ly-page.component';

describe('LyPageComponent', () => {
  let component: LyPageComponent;
  let fixture: ComponentFixture<LyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
