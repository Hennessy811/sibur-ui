import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonDrawComponent } from './polygon-draw.component';

describe('PolygonDrawComponent', () => {
  let component: PolygonDrawComponent;
  let fixture: ComponentFixture<PolygonDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
