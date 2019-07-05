import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflasiKomoditasPage } from './inflasi-komoditas.page';

describe('InflasiKomoditasPage', () => {
  let component: InflasiKomoditasPage;
  let fixture: ComponentFixture<InflasiKomoditasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiKomoditasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflasiKomoditasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
