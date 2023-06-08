import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreConstructComponent } from './score-construct.component';

describe('ScoreConstructComponent', () => {
  let component: ScoreConstructComponent;
  let fixture: ComponentFixture<ScoreConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreConstructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
