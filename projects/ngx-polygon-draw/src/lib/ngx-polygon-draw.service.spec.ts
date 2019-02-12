import { TestBed } from '@angular/core/testing';

import { NgxPolygonDrawService } from './ngx-polygon-draw.service';

describe('NgxPolygonDrawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPolygonDrawService = TestBed.get(NgxPolygonDrawService);
    expect(service).toBeTruthy();
  });
});
