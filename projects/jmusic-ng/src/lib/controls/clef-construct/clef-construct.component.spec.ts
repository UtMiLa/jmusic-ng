import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClefConstructComponent } from './clef-construct.component';

describe('ClefConstructComponent', () => {
  let component: ClefConstructComponent;
  let fixture: ComponentFixture<ClefConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClefConstructComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClefConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
