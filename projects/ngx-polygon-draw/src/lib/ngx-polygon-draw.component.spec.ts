import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPolygonDrawComponent } from './ngx-polygon-draw.component';

describe('NgxPolygonDrawComponent', () => {
  let component: NgxPolygonDrawComponent;
  let fixture: ComponentFixture<NgxPolygonDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPolygonDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPolygonDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
