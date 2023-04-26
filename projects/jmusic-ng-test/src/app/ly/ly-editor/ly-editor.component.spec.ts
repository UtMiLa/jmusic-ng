import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LyEditorComponent } from './ly-editor.component';

describe('LyEditorComponent', () => {
  let component: LyEditorComponent;
  let fixture: ComponentFixture<LyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
