import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClefDisplayComponent } from './clef-display.component';

describe('ClefDisplayComponent', () => {
  let component: ClefDisplayComponent;
  let fixture: ComponentFixture<ClefDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClefDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClefDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
