import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredMusicComponent } from './structured-music.component';

describe('StructuredMusicComponent', () => {
  let component: StructuredMusicComponent;
  let fixture: ComponentFixture<StructuredMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
