import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmusicNgComponent } from './jmusic-ng.component';

describe('JmusicNgComponent', () => {
  let component: JmusicNgComponent;
  let fixture: ComponentFixture<JmusicNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmusicNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmusicNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
