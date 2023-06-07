import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClefDialogComponent } from './clef-dialog.component';

describe('ClefDialogComponent', () => {
  let component: ClefDialogComponent;
  let fixture: ComponentFixture<ClefDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClefDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClefDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
