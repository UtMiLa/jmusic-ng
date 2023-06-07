import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyConstructComponent } from './key-construct.component';

describe('KeyConstructComponent', () => {
  let component: KeyConstructComponent;
  let fixture: ComponentFixture<KeyConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyConstructComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
