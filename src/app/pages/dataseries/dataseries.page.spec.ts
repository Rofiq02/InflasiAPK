import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataseriesPage } from './dataseries.page';

describe('DataseriesPage', () => {
  let component: DataseriesPage;
  let fixture: ComponentFixture<DataseriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataseriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataseriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
