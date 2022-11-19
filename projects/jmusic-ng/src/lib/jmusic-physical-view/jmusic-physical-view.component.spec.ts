import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmusicPhysicalViewComponent } from './jmusic-physical-view.component';

describe('JmusicPhysicalViewComponent', () => {
  let component: JmusicPhysicalViewComponent;
  let fixture: ComponentFixture<JmusicPhysicalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmusicPhysicalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmusicPhysicalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
